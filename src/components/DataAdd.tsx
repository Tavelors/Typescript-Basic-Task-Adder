import React, {useState, FormEvent}from 'react'

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
        <form onSubmit={handleSubmit}  >
            <input  type='text' placeholder='Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default DataAdd


