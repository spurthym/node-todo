import React, { FormEventHandler } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface FormPropTypes{
    input:string
    createTodo:FormEventHandler<HTMLInputElement>
    setInput:(input:string)=>void
}
const Form = ({createTodo,input,setInput}:FormPropTypes) => {
  return (
    <form onSubmit={createTodo} className="flex justify-between bg-red-400 p-4 rounded-lg items-center">
        <input  
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        className='w-full text-xl rounded-lg p-[3px]'/>

        <button className='ml-2 rounded-lg text-gray-800'>
            <AddCircleIcon/>
        </button>
    </form> 
  )
}

export default Form