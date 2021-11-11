import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title, date } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  
  const current = new Date();
   // you can use 'new Date().getTime()' to get unique number
  //const dat = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  //const [date, setdate] = useState(dat)
  
  console.log('Todoitema:', date, props.todo.id, title)
  console.log('Todoitem-todo:', props.todo)
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <span>  : Date created is {date} </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
      
    </li>
  )
}

export default TodoItem
