import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //static async getInitialProps (ctx) {
  //const props = await Document.getInitialProps(ctx)
  //return { ...props, customValue: 'hi there!'  }
  //}

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>No-line</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
