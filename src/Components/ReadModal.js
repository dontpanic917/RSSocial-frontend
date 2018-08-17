import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Parser from 'html-react-parser'
import {closeArticle} from '../actions/navActions'

const inlineStyle = {
  marginTop: 'auto !important',
  marginLeft: 'auto',
  marginRight: 'auto'
};

const ReadModal = ({categories,content,contentSnippet,creator,encodedContent,guid,isoDate,link,pubDate,read,title,open,closeArticle}) => (
  <Modal
    open={open}
    onClose={closeArticle}
    size='large'
    style={inlineStyle}
    >
      {console.log(open)}
    <Modal.Header>{title}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        {link ? <a href={link}>{title}</a> : null}
        <br/>
        {encodedContent ? Parser(encodedContent) : content ? Parser(content) : contentSnippet}
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
const mapStateToProps = (state) => ({
  ...state.nav.activeArticle,
  open: state.nav.modalStatus
})
export default connect(mapStateToProps, {closeArticle})(ReadModal)
