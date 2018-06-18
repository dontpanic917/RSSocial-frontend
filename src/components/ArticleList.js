import React from 'react'
import { Card } from 'semantic-ui-react'
import Article from './Article'
const ArticleList = ({feedURL,title,description,link,items}) => (
  <Card.Group centered>
    {console.log(items)}
    {Object.values(items).map(item =>
      <Article
        key={item.guid}
        {...item}
        onClick={console.log}
      />
    )}
  </Card.Group>
)
export default ArticleList
