import { Editor, Raw } from 'slate';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import BurgerMenu from './burgerMenu/burgerMenu';
import { navStyle } from './navStyle';
// import { getPrompts } from "../reducers/prompts";

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu style={navStyle} inverted>
        <Menu.Item position='left' onClick={this.props.toggleSidebar}>Menu</Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
