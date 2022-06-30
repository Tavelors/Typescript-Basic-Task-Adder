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
    <StyledDiv>
        <form  onSubmit={handleSubmit}  >
            <input  type='text' placeholder='Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button >Add</button>
        </form>
    </StyledDiv>
  )
}


const StyledDiv = styled.div/*css*/`
// ${tw`bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}
form input {
    ${tw`shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-inner`}
    max-width:300px;
    border-color: rgb(59 130 246 / var(--tw-bg-opacity));
    margin-right: 5px;
    margin-top: 30px;
    margin-bottom: 35px;
}
form button {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-inner`}
}

`

export default DataAdd


