import React from 'react'
import { Card } from 'semantic-ui-react'
import Parser from 'html-react-parser'
import {connect} from 'react-redux'
import {openArticle} from '../actions/navActions'

const Article = ({
  categories, content, contentSnippet,
  creator, encodedContent, guid,
  isoDate, link, pubDate, read, title,
  openArticle, subscription }) => {

  return (
    <Card
      subscription={subscription}
      guid={guid}
      header={title}
      description={Parser(content)}
      onClick={() => openArticle(subscription,guid)}
    />
  )
}
const mapStateToProps = (state) => ({
  subscription: state.nav.activeSubscription
})
export default connect(null,{openArticle})(Article)
