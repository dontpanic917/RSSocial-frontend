import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleList from '../Components/ArticleList'


const mapStateToProps = (state) => ({
  ...state.subscriptions[state.nav.activeSubscription]
})
export default connect(mapStateToProps, null)(ArticleList)
