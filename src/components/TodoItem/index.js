// Write your code here
import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  deletefun = () => {
    const {listItems, deleteitem} = this.props
    const {id} = listItems

    deleteitem(id)
  }

  render() {
    const {listItems} = this.props
    const {title} = listItems

    return (
      <li className="each_item">
        <p className="desc">{title}</p>
        <button type="button" className="delete_btn" onClick={this.deletefun}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
