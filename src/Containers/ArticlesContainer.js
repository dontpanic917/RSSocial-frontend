import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../Components/ArticleList'
import {openArticle} from '../actions/navActions'

const mapStateToProps = (state) => ({
  activeSubscription: state.nav.activeSubscription,
  ...state.subscriptions[state.nav.activeSubscription]
})
export default connect(mapStateToProps, {openArticle})(ArticleList)
