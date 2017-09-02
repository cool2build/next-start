import { Provider } from 'react-redux';
import { initStore } from '../reducers/index';
import reducer from '../reducers/index';
import Layout from '../components/layout/layout';


class Index extends React.Component {
  // static async getInitialProps({ req }) {
  //   const isServer = !!req;
  //   const store = initStore(reducer, null, isServer);
  //   const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  //   let pageProps = {};

  //   return { initialState: store.getState(), isServer, userAgent };
  // }

  constructor(props) {
    super(props);
    // this.store = initStore(reducer, props.initialState, props.isServer);
  }

  render() {
    return (
      // <Provider store={this.store}>
        <Layout>
          <h3>Application Content</h3>
        </Layout>
      // </Provider>
    );
  }
}

export default Index;
