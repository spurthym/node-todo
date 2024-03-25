import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoType } from '../types';

interface TodoProps{
    todos:TodoType
    deleteTodo:(id:string)=>void
    toggleComplete:(todo:TodoType)=>void
}

const Todo = ({todos,deleteTodo,toggleComplete}:TodoProps) => {
  return (
    <li className='p-2 bg-red-500 my-2 rounded-md uppercase shadow-sm'>
        <div className='flex items-center justify-between'>
            <p className={todos.completed?"text-gray-700 cursor-pointer line-througj opacity-20": "text-gray=700 cursor-pointer"}>
                {todos.text}
                </p>
                <div className='flex gap-3 '>
                    <button onClick={()=>toggleComplete(todos)}>

                        <CheckIcon/>
                    </button>
                    <button onClick={()=>deleteTodo(todos.id)}>
                        <DeleteIcon/>
                    </button>
                </div>

        </div>

    </li>
  )
}

export default Todo