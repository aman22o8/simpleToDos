// Write your code here
import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {myList: initialTodosList}

  deletespec = id => {
    const {myList} = this.state
    const filteredItems = myList.filter(each => each.id !== id)

    this.setState({myList: filteredItems})
  }

  render() {
    const {myList} = this.state
    return (
      <div className="main_container">
        <div className="card_container">
          <h1 className="main_heading">Simple Todos</h1>
          <ul className="list_container">
            {myList.map(each => (
              <TodoItem
                key={each.id}
                deleteitem={this.deletespec}
                listItems={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
