import { useEffect}  from 'react'
import { useText, useTaskList } from '../AppContext/AppProvider'
import addstyle from './addstyle.css'

export const AddTask = () =>{
    const { getText, setText} = useText()
    const { getTaskList, setTaskList } = useTaskList()

    /// Função de envio de formulario
    const createTask = (e) =>{
        e.preventDefault()

        /// Criar objeto "tarefa"
        let newtask = {
            id: new Date().getTime().toString(),
            name: getText,
            done: false
        }

        /// Salvar objeto "tarefa" no array
        setTaskList([...getTaskList, newtask])
        setText('')
    }

    /// Salvar no localstorage 
    useEffect(()=>{
        localStorage.setItem('task', JSON.stringify(getTaskList))
    },[getTaskList])

    return(
        /// Inicio do formulario     
              <form autoComplete="off" onSubmit={createTask} className="addtask">
                <input type='text' placeholder="Adicionar Tarefa" required onChange={(e) => setText(e.target.value)} value={getText} className='addtext' maxLength={50} />
                <button type="submit" className='addbutton'>
                ➕
                </button>
            </form>
        /// Fim do formulario
    )
}
