import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addSubscription, fetchSubscriptions, populateSubscriptions } from '../actions/subscriptionActions';
import { onFormChange, setMenuFocus, setSubscriptionFocus } from '../actions/navActions';
import { Container, Dropdown, Icon, Input, Menu, Form, Checkbox, Button } from 'semantic-ui-react'

class NavMenu extends Component {

  render() {
    const { addSubscription, addSubscriptionUrl, addSubscriptionFeedName, activeItem, setMenuFocus, subscriptions, fetchSubscriptions, setSubscriptionFocus, onFormChange } = this.props
    const subRender = Object.keys(subscriptions).map( key => <Menu.Item style={{textAlign: 'justify'}} key={key} onClick={() => setSubscriptionFocus(key)}>{key}</Menu.Item>)
    const trigger = (
      <span>
        <i
          className="right floated window add icon"
          onClick={(e)=>{e.preventDefault();e.stopPropagation()}}
        />
      </span>
    )
    return (
      <Menu vertical size='large' floated>
        {/* <Menu.Item style={{textAlign: 'justify'}}>
          <Input placeholder='Search...' />
        </Menu.Item> */}
        <Menu.Item name='feeds' active={activeItem === 'feeds'} style={{textAlign: 'justify'}} onClick={() => setMenuFocus('feeds')}>
          Feeds
          <Dropdown icon='add' className='addFeed'>
            <Dropdown.Menu>
              <Dropdown.Header content='Add an RSS subscription' />
              <Form style={{margin:'10px'}}>
                <Form.Field>
                  <label>URL</label>
                  <input name='addSubscriptionUrl' placeholder='URL' value={addSubscriptionUrl} onClick={(e)=>{e.stopPropagation()}} onChange={(e)=>{onFormChange(e)}} />
                </Form.Field>
                <Form.Field>
                  <label>Feed Name</label>
                  <input name='addSubscriptionFeedName' placeholder='Feed Name' value={addSubscriptionFeedName} onClick={(e)=>{e.stopPropagation()}} onChange={(e)=>{onFormChange(e)}} />
                </Form.Field>
                <Button type='submit' onClick={(e)=>{addSubscription(addSubscriptionFeedName,addSubscriptionUrl)}}>Add Subscription</Button>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        {activeItem === 'feeds' ? <Menu.Menu> {subRender} </Menu.Menu> : null}

        {/* <Menu.Item name='bookmarks' active={activeItem === 'bookmarks'} style={{textAlign: 'justify'}} onClick={() => setMenuFocus('bookmarks')}>
          Bookmarks
        </Menu.Item>
        {activeItem === 'bookmarks' ? <Menu.Item>Tags<Menu.Menu></Menu.Menu><Menu.Menu>Public</Menu.Menu> </Menu.Item> : null} */}
        {/* <Menu.Item name='friends' active={activeItem === 'friends'} style={{textAlign: 'justify'}} onClick={() => setMenuFocus('friends')}>
          Friends
          <Dropdown icon='add' className='addFeed'>
            <Dropdown.Menu>
              <Dropdown.Header content='Add an RSS subscription' />
              <Form style={{margin:'10px'}}>
                <Form.Field>
                  <label>URL</label>
                  <input name='addSubscriptionUrl' placeholder='URL' value={addSubscriptionUrl} onClick={(e)=>{e.stopPropagation()}} onChange={(e)=>{onFormChange(e)}} />
                </Form.Field>
                <Form.Field>
                  <label>Feed Name</label>
                  <input name='addSubscriptionFeedName' placeholder='Feed Name' value={addSubscriptionFeedName} onClick={(e)=>{e.stopPropagation()}} onChange={(e)=>{onFormChange(e)}} />
                </Form.Field>
                <Button type='submit' onClick={(e)=>{addSubscription(addSubscriptionFeedName,addSubscriptionUrl)}}>Add Subscription</Button>
              </Form>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item> */}


      </Menu>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  subscriptions: state.subscriptions,
  activeItem: state.nav.activeItem,
  addSubscriptionUrl: state.nav.addSubscriptionUrl,
  addSubscriptionFeedName: state.nav.addSubscriptionFeedName
});

export default connect(mapStateToProps, {addSubscription, onFormChange, populateSubscriptions, setMenuFocus, setSubscriptionFocus})(NavMenu);
