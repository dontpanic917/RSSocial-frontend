import React from 'react'
import { Card } from 'semantic-ui-react'

const Article = (props) => (
  <Card

    header={props.title}
    description={props.content[':encoded'] ? props.content[':encoded'] : props.content}
  />

)
export default Article
