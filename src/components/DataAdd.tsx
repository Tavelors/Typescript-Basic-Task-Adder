import React, {useState, FormEvent}from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

interface IProps {
    setData: any,
    data: {
        id: number,
        task: string,
    }[]
}

const DataAdd: React.FC<IProps> = ({data, setData}) => {
    const [task, setTask] = useState('')


 const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        // console.log(firstName);
        if(task !== '') {
            setTask('')
            setData((curr: IProps['data']) => {
                let newData = [...curr]
                let uniqueID = newData.length + Math.random()
            let newList = {
                id: +uniqueID.toFixed(5) ,
                task: task,
            }
            newData.unshift(newList)
            return newData
            
        })
    }
       

 }

  return (
    <div  >
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}  >
            <StyledInput className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  type='text' placeholder='Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Add</button>
        </form>
    </div>
  )
}


const StyledInput = styled.input/*css*/`
max-width:300px;
border-color: rgb(59 130 246 / var(--tw-bg-opacity));
margin-right: 5px;

`

export default DataAdd


