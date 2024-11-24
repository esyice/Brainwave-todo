import { useState , useEffect } from 'react'
import './App.css'
import { MdDelete } from "react-icons/md"

const getTodo = () => {
  const savedTodo = localStorage.getItem('task')
  return savedTodo ? JSON.parse(savedTodo) : [] 
}

function App() {
  const [inputTodo , setInputTodo] = useState('')
  const [inputDate , setInputDate] = useState('')
  const [todo , setTodo] = useState(getTodo)

  // useEffect(() => {
  //   const items =JSON.parse(localStorage.getItem('task'))
  //   console.log(items)    
  // }, [])

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(todo))
  }, [todo])

  const handleInputTodo = (e) => {
    setInputTodo(e.target.value)
  }
  const handleInputDate = (e) => {
    setInputDate(e.target.value)
  }
  const handleDeleteTodo = (index) => {
    setTodo((prevTodos) => prevTodos.filter((_, i) => i !== index))
  }

  const handleClick = () => {
    if (inputTodo === "" || inputDate === "") {
      alert("Both fields are required!")
      return
    }
    const newEntry = { todo: inputTodo, date: inputDate }
    setTodo((prevTodos) => [...prevTodos, newEntry])
    setInputTodo("")
    setInputDate("")
  }

  return (
    <div className='flex align-middle justify-evenly items-center mt-20 '>
      <div className=' p-4 bg-slate-600 h-auto w-auto border rounded-xl '>
        <div className=''>
          <input className='mr-4 mt-4 p-2 rounded-xl bg-[#0f1729] text-white' onChange={handleInputTodo} value={inputTodo} placeholder='Add a todo...' type="text" name="" id="" required />
          <input className='mr-4 mt-4 p-2 rounded-xl bg-[#0f1729] text-white' onChange={handleInputDate} type="date" value={inputDate} name="" id="" required />
          <button className='mt-4 p-2 rounded-xl bg-slate-400 text-xl w-10 hover:bg-[#0957ff]' onClick={handleClick}>+</button>
        </div>
        {/* <div className='p-4 mx-4'>
          <button className='border m-2 p-2 text-lg'>Panding</button>
          <button className='border m-2 p-2 text-lg'>Completed</button>
          <button className='border m-2 p-2 text-lg'>Deleed</button>
        </div>
        <div className='p-4 mx-4'>
          <ul>
            {todo.map((item , index )=>
              <li className='border p-4 text-2xl bg-[#0f1729] text-white' key={index}>
                <input className='mr-4 mt-4 p-2 rounded-xl bg-[#0f1729] text-white'  value={item.todo} readOnly />
                <input className='mr-4 mt-4 p-2 rounded-xl bg-[#0f1729] text-white' readOnly value={item.date} />
                  <MdDelete className='mb-2 ms-3 modifybtm'  />
              </li>
            )}
          </ul>
        </div>
        {todo.map((item, index ) =>
          <div className='border flex  gap-4'>
            <div><h1 className='text-2xl border bg-[#0f1729] text-white p-2 m-3 rounded-2xl'>Todo</h1>
              <h1>{item.todo}</h1>
            </div>
            <div><h1 className='text-2xl border bg-[#0f1729] text-white p-2 m-3 rounded-2xl'> Date</h1>
              <h1>{item.date}</h1>
            </div>
            <div></div>
            <div></div>
          </div>
          )} */}

        <div className=' flex flex-col gap-2 items-center mx-4'>
          <div className='bg-[#29385a] text-white rounded-xl flex flex-row gap-1 m-2 font-bold  ' >
            <button className='p-4  bg-[#0f1729] text-white m-3 rounded-2xl cursor-default'> Todo</button>
            <button className='p-4  bg-[#0f1729] text-white m-3 rounded-2xl cursor-default'>Due Date</button>
            <button className='p-4  bg-[#0f1729] text-white m-3 rounded-2xl cursor-default'>Actions</button>
          </div>
        </div>
        {todo.map((item, index ) =>
            <div key={index} className='bg-[#0f1729]  text-white rounded-xl flex flex-row gap-2 m-2'>
              <p className=' m-3 p-4 text-center  w-28'>{item.todo}</p>
              <p className=' m-3 p-4 text-center align-middle h-full '> {item.date}</p>
              <p className=' m-3 p-4 right-0 text-center'><MdDelete size={24} className='cursor-pointer hover:text-red-700' onClick={()=>(handleDeleteTodo(index))}/></p>
            </div>
        )}
      </div>
    </div>
  )
}

export default App
