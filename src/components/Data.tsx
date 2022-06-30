import React,{useState} from 'react'
import List from './List'
import Completed from './Completed'
import DataAdd from './DataAdd'
import TaskNav from './TaskNav'
interface IState {
    data: {
        id: number,
        task: string,
    }[],
    setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>,
    setChangeList: React.Dispatch<React.SetStateAction<boolean>>
    changeList: boolean
}
// Dispatch<SetStateAction<{ id: number; task: string; }[]>>
const Data = () => {
    const [data, setData] = useState<IState["data"]>([])
      const [completeData, setCompleteData] = useState<IState["data"]>([])
const [changeList, setChangeList] = useState<IState['changeList']>(true)



let currentList: any;
let showDataAdd: any;
      if (changeList) {
        showDataAdd = <DataAdd data={data} setData={setData} />
        currentList = <List data={data} setData={setData} completeData={completeData} setCompleteData={setCompleteData} />
      } else {
        currentList =  <Completed completeData={completeData} setCompleteData={setCompleteData} />
      }
  return (
    <div>
        <TaskNav setChangeList={setChangeList} />
        {showDataAdd}
        {currentList}
    </div>
  )
}

export default Data