import React from 'react'
import { Card } from 'semantic-ui-react'
import Article from './Article'

const ArticleList = ({feedURL,title,description,link,items,activeSubscription}) => (
  <Card.Group>
    {console.log(items)}
    {Object.values(items).map(item =>
      <Article
        key={item.guid}
        subscription={activeSubscription}
        {...item}
      />
    )}
  </Card.Group>
)
export default ArticleList
