import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from '../../components/nav/nav';
import Auth from '../../components/auth/auth';
import { nprogressStyle } from './nprogressStyle';
import { Sidebar, Segment, Menu, Header } from 'semantic-ui-react';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  render() {
    const menus = [
      {key: 'order', href: '/', name: 'Order'},
      {key: 'history', href: '/history', name: 'History'},
      {key: 'settings', href: '/settings', name: 'Settings'},
      {key: 'about', href: '/about', name: 'About'}
    ];

    return (
      <div>
        <Head>
          <title>No-line</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
        </Head>
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
            {menus.map(menu => 
              <Link href={menu.href} key={menu.key} passHref> 
                <Menu.Item link>{menu.name}</Menu.Item>
              </Link>
            )}
            <Auth />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment 
              inverted
              color='grey'
              style={{height: '100vh', borderRadius: 0}}
            >
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <style jsx global>{nprogressStyle}</style>
      </div>
    );
  }
}

export default Layout;