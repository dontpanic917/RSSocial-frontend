import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../components/ArticleList'


const mapStateToProps = (state) => ({
  ...state.subscriptions[state.nav.activeSubscription]
})
export default connect(mapStateToProps, null)(ArticleList)
