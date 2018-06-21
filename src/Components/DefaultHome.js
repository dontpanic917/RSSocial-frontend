import React from 'react'
import { Container, Header} from 'semantic-ui-react'

const DefaultHome = () => {
  return (
    <Container textAlign='center'>
      <Header as='h2'>Welcome to Simple Syndicate</Header>
    <p>
      An app designed for reading RSS feeds. Get started by adding a feed on the feed
      panel to your left.
    </p>
    </Container>
  )
}
export default DefaultHome
