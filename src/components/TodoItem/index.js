// Write your code here
import './index.css'

const TodoItem = props => {
  const {listItems, deleteitem} = props
  const {id, title} = listItems
  const deletefun = () => {
    deleteitem(id)
  }

  return (
    <li className="each_item">
      <p className="desc">{title}</p>
      <button type="button" className="delete_btn" onClick={deletefun}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
