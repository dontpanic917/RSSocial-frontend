import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Parser from 'html-react-parser'
import {connect} from 'react-redux'
import {openArticle} from '../actions/navActions'

class Article extends Component {
  state = {
    hover: false
  }
  handleOnMouseOver = () => {
    this.setState({
      hover: true
    })
  }
  handleonMouseLeave = () => {
    this.setState({
      hover: false
    })
  }
  render(){
    let {
      categories, content, contentSnippet,
      creator, encodedContent, guid,
      isoDate, link, pubDate, read, title,
      openArticle, subscription
    } = this.props
    return (
      <Card
        as='div'
        link={false}
        className='wrap'
        subscription={subscription}
        guid={guid}
        header={title}
        style={{cursor:'pointer', padding: ''}}
        description={Parser(content)}
        onClick={() => openArticle(subscription,guid)}
        onMouseOver={this.handleOnMouseOver}
        onMouseLeave={this.handleonMouseLeave}
        raised={this.state.hover}
      />
    )
  }
}
const mapStateToProps = (state) => ({
  subscription: state.nav.activeSubscription
})
export default connect(null,{openArticle})(Article)
