import {AddTask} from './AddTask/AddTask'
import {ListTask} from './ListTask/ListTask'
import AppProvider from './AppContext/AppProvider'
import taskstle from './tasksyle.css'


export const AppTask = () => { 

        return(
            <div className='backgroundApp'>
                <div className='appContent'>
                    <AppProvider>
                        <h1 className='appTitle'>Lista de Tarefas</h1>
                        <AddTask></AddTask>
                        <ListTask></ListTask>
                    </AppProvider>
                </div>
            </div>

        )
    
}