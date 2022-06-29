import React from 'react'
import DeleteList from './DeleteList'
interface IProps { 
  data: {
    id: number,
    task: string,
  }[],
  setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
}

const List: React.FC<IProps> = ( {data, setData} ) => {


    
  return (
    <div>
        <ul>
            {data.map((list) => {
              return  <li key={list.id} >
               <p>Task: {list.task} <DeleteList id={list.id} setData={setData} data={data} /> </p>

                <hr></hr>
              </li>
                
            })}
        </ul>
    </div>
  )
}

export default List

