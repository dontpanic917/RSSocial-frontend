import React, {Component} from 'react'
import { connect } from 'react-redux';
import NewNoteCard from '../Components/NewNoteCard'
import { Card } from 'semantic-ui-react'
import NoteWrapper from '../Components/NoteWrapper'
import {ActionCable} from 'react-actioncable-provider'
import { fetchNotes, connectNoteSocket, sendMessage } from '../actions/noteActions';
class NotesContainer extends Component {

  state = {
    notes: []
  }

  onDelete = (index, id) =>{
    if (
      this.state.notes
      && this.state.notes[index]
      && this.state.notes[index].id === id
    ) {
      this.setState({
        notes: [...this.state.notes.slice(0,index),
          ...this.state.notes.slice(index+1)]
      })
      const act = 'delete'
      this.refs.noteChannel.send({id, index, act})
    }
  }

  onEdit = (note) => {
    this.setState({
        notes: [...this.state.notes.slice(0, note.index),
           note,
          ...this.state.notes.slice(note.index + 1)]
      }
    )
  }

  sendMessage = (body) => {
      const note = body
      const room = `${localStorage.getItem('user_id')}`
      const act = 'create'
      // Call perform or send
      this.refs.noteChannel.send({note, room, act})
  }


  onReceived = (message) => {
    if (message.act !== "delete") {
      this.setState({
          notes: [message,
              ...this.state.notes
          ]
      })
      // console.log("notestatemessage", message)
    } else {
      this.onDelete(message.index, message.id)
      // console.log("deletemessage", message)
    }

  }

  componentDidMount = () => {
    this.props.fetchNotes()
    this.props.connectNoteSocket()
  }

  renderNotes = () => {
    return this.props.notes.map( (note, index) => {
      return (
        <NoteWrapper
          onEdit={this.onEdit}
          id={index}
          key={note.id}
          note={note}
          onDelete={this.onDelete}
        />)
    }).filter( (element) => {
      // console.log(element)
      return element.props.note.body.toLowerCase().includes(
        this.props.query.toLowerCase()
      )
    });
  }

  render(){
    // console.log(this.props)
    return (
      <div>
        <ActionCable
          ref='noteChannel'
          channel={{
            channel: 'NoteChannel',
            room: `${localStorage.getItem('user_id')}`,
            username: `${localStorage.getItem('username')}`
          }}
          onReceived={this.onReceived}
        />
        <Card.Group centered className='notegroup'>
          <NewNoteCard createCard={this.props.sendMessage}/>
          {this.renderNotes()}
        </Card.Group>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  notes: state.notes.notes,
  statebitch: state
});

export default connect(mapStateToProps, { fetchNotes, connectNoteSocket, sendMessage })(NotesContainer);
