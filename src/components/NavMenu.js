import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSubscriptions, populateSubscriptions } from '../actions/subscriptionActions';
import { setMenuFocus, setSubscriptionFocus } from '../actions/navActions';
import { Container, Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

class NavMenu extends Component {

  render() {
    const { activeItem, setMenuFocus, subscriptions, fetchSubscriptions } = this.props
    const subRender = Object.keys(subscriptions).map( key => <Menu.Item name={key} onClick={this.props.setSubscriptionFocus}>{key}</Menu.Item>)
    return (
      <Menu vertical>
        <Menu.Item >
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item name='feeds' active={activeItem === 'feeds'} onClick={setMenuFocus}>
          Feeds
        </Menu.Item>
        {activeItem === 'feeds' ? <Menu.Item> {subRender} </Menu.Item> : null}

        <Menu.Item name='bookmarks' active={activeItem === 'bookmarks'} onClick={setMenuFocus}>
          Bookmarks
        </Menu.Item>
        {activeItem === 'bookmarks' ? <Menu.Item>Tags<Menu.Menu></Menu.Menu><Menu.Menu>Public</Menu.Menu> </Menu.Item> : null}
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={setMenuFocus}>
          Shares
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  subscriptions: state.subscriptions,
  activeItem: state.nav.activeItem
});

export default connect(mapStateToProps, {populateSubscriptions, setMenuFocus, setSubscriptionFocus})(NavMenu);
