import { Provider } from "react-redux";
import reducer from "../reducers/index";
import { initStore } from "../reducers/index";
import Nav from "../components/nav";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// import injectTapEventPlugin from "react-tap-event-plugin";
// if (typeof window !== "undefined") {
//   injectTapEventPlugin();
// }

// const muiDefaultTheme = {
//   userAgent: false
// };

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(reducer, null, isServer);
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    let pageProps = {};

    return { initialState: store.getState(), isServer, userAgent };
  }

  constructor(props) {
    super(props);
    this.store = initStore(reducer, props.initialState, props.isServer);
  }

  render() {
    return (
      <div id="main">
        <div id="firebaseui-auth-container" />
        <Provider store={this.store}>
          <MuiThemeProvider muiTheme={{ userAgent: this.props.userAgent }}>
            <Nav />
          </MuiThemeProvider>
        </Provider>
        <style>{`
          #main {
            {/* display: flex; */}
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}
