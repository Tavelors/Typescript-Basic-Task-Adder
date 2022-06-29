import React,{useState} from 'react'
import List from './List'
import DataAdd from './DataAdd'

interface IState {
    data: {
        id: number,
        task: string,
    }[],
    setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
}
// Dispatch<SetStateAction<{ id: number; task: string; }[]>>
const Data = () => {
    const [data, setData] = useState<IState["data"]>([{
        'id': 1,
        "task": "stuff to do",
      }, {
        "id": 2,
        "task": "Eustace",
      }]
      )


      
      
  return (
    <div>
        <DataAdd data={data} setData={setData} />
        <List data={data} setData={setData} />
    </div>
  )
}

export default Data