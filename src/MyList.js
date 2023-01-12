import React from 'react'
import './App.css'
import ListItem from './ListItem'


//  this is where things are ACTUALLY RENDERED, in the APP 
export default class MyList extends React.Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

  handleChange = e => {
    console.log('handle that change')
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = e => {
    e.preventDefault()
    // console.log('The form has had a submission event')
    // const yourArray = this.state.taskArray
    // yourArray.push(...this.state.newItem)
    // this.setState({
    //   taskArray: yourArray
    // })

    this.setState(prevState => {
      const prevStateCopy = [...prevState.taskArray]
      prevStateCopy.push(prevState.newItem)
      const newState = {
        taskArray: prevStateCopy,
        newItem: ''
      }
      return newState
    })
  }


  render() {

    // This Maps all of the information into a new array which takes in the tasks and gives them a key 
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })

    return (
      <div>
        <h1> Things I should stop procrastinating</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor="newItem">New Item:</label>
          <input
            id="newItem"
            type="type"
            placeholder="enter an item you would like to procrastinate"
            onChange={this.handleChange}
            value={this.state.newItem}
          />
        </form>

        <ul>
          {/* This is the information we have mapped */}
          {todoItems}
        </ul>

        <button onClick={this.clearList}>Start procrastinating</button>
      </div>


    )
  }

}