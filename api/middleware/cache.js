const LRUCache = require('lru-cache');

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 3600
});

const renderAndCache = (server, req, res, pagePath, queryParams) => {
  /*
  * NB: make sure to modify this to take into account anything that should trigger
  * an immediate page change (e.g a locale stored in req.session)
  */
  const key = req.url;

  if (ssrCache.has(key)) {
    res.send(ssrCache.get(key));
    return;
  }

  server.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(key, html);
      res.send(html);
    })
    .catch(err => {
      app.renderError(err, req, res, pagePath, queryParams);
    })
};

module.exports = renderAndCache;