import { useTaskList } from "../AppContext/AppProvider"
import { useRef, useMemo, useCallback, useState } from "react"
import liststyle from "./liststyle.css"

export const ListTask = () => {
  const { getTaskList, setTaskList } = useTaskList()

  return (
    <div>
      {getTaskList.map((task) => {

        function delTask() {
          var id = task.id
          const fill = getTaskList.filter((task) => {
            return task.id !== id
          })
          setTaskList(fill)
        }

        function checkBox() {
          if (task.done) {
            task.done = false
            const boxUpdate = getTaskList.filter(() => {
              return getTaskList
            })
            setTaskList(boxUpdate)
          } else {
            task.done = true
            const boxUpdate = getTaskList.filter(() => {
              return getTaskList
            })
            setTaskList(boxUpdate)
          }
        }

        function updateTask() {
            const enteredName = prompt('Please enter your name')
            if(enteredName != '' && enteredName !== null)
            {
                task.name = enteredName
                const boxUpdate = getTaskList.filter(() => {
                  return getTaskList
                })
                setTaskList(boxUpdate)
                console.log(enteredName)
            }else{
                console.log('Aqui')
            }
          }  

          return (
            <div className="tasklist" key={task.id}>
              <input
                className="checkbox"
                type="checkbox"
                checked={task.done}
                onChange={checkBox}
              ></input>
              <label className="tasktext">{task.name}</label>
              <button className="editbutton" onClick={updateTask}>
                ✏️
              </button>
              <button className="deletebutton" onClick={delTask}>
                ❌
              </button>
            </div>
          )
      })}
    </div>
  )
}
