import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import { fetchSubscriptions } from '../actions/subscriptionActions';
import NavMenu from '../Components/NavMenu'
import ArticlesContainer from './ArticlesContainer'



class FeedUI extends Component {

  componentDidMount(){
    this.props.fetchSubscriptions()
  }
  render(){
    let { subscriptions, activeSubscription } = this.props

    return(
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={3} floated='left'><NavMenu /></Grid.Column>
          <Grid.Column width={10} textAlign={'left'}>
          {
            this.props.activeSubscription
            ? <ArticlesContainer />
            : null
          }
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid.Row>
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  activeSubscription: state.nav.activeSubscription
})
export default connect(mapStateToProps, {fetchSubscriptions})(FeedUI);
