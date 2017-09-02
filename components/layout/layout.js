import Nav from '../nav/nav';
import Link from 'next/link';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      loadingContent: false
    };

    this.handleLoading = this.handleLoading.bind(this);
    this.handleLoadingComplete = this.handleLoadingComplete.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  handleLoading() {
    this.setState({ loadingContent: true });
  }

  handleLoadingComplete() {
    this.setState({ loadingContent: false });
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    let isLoggedIn = false; // temporary, should login status from server or props
    let authMenu = 'Signin';
    if (isLoggedIn) {
      authMenu = 'Signout';
    }

    const menus = [
      {href: '/', name: 'Order'},
      {href: '/history', name: 'History'},
      {href: '/settings', name: 'Settings'},
      {href: '/about', name: 'About'},
      {href: `/${authMenu.toLowerCase()}`, name: authMenu}
    ];

    console.log('children: ', this.props.children);
    return (
      <div id="main">
        <Nav toggleSidebar={this.toggleSidebar}/>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='slide along'
            visible={this.state.showSidebar}
            vertical
            inverted
            width='thin'
          >
            {menus.map((menu, index) => 
              <Menu.Item link={true} key={index}>
                <Link href={menu.href}><a>{menu.name}</a></Link>
              </Menu.Item>
            )}
          </Sidebar>
          <Sidebar.Pusher>
            <Segment 
              inverted
              color='grey'
              style={{height: '100vh', borderRadius: 0}}
              loading={this.state.loadingContent}
            >
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Layout;