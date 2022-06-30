import React from 'react'
import DeleteList from './DeleteList'
import CheckList from './CheckList'
import tw from 'twin.macro'
import styled from 'styled-components'
interface IProps { 
  data: {
    id: number,
    task: string,
  }[],
  setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
  completeData: {
    id: number,
    task: string,
  }[],
  setCompleteData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
}

const List: React.FC<IProps> = ( {data, setData, completeData, setCompleteData} ) => {


    
  return (
    <StyledDiv  >
        <ol >
            {data.map((list) => {
              return  <li className='list-li' key={list.id} >
                <span className='span1' >
                {list.task}
                </span>
                <span className='span2' >
                <span className='tick' >
                <CheckList id={list.id} setData={setData} data={data} completeData={completeData} setCompleteData={setCompleteData} />
                </span>
                <span className='cross' >

               <DeleteList id={list.id} setData={setData} data={data} /> 
                </span>
                </span>

               {/* <hr></hr> */}
              </li>
                
            })}
        </ol>
    </StyledDiv>
  )
}

const StyledDiv = styled.div/*css*/`
// text-align: center;
// margin-left:auto;
// margin-right:auto;
ol {
  ${tw`bg-white rounded-lg border border-gray-200 w-96 text-gray-900`}
  width: 70%;
  margin: auto;
  
  .list-li {
    &:hover{
      background-color: #cbcbcb;
    }
    ${tw`px-6 py-2 border-b border-gray-200 w-full`}
    display: flex;
  }
}
.span1 { 
  max-width: 430px; 
  word-wrap: break-word;
 
}
.span3 { 

}
.span2 {
  display: flex;
// position: relative;
margin-left:auto;
height: 24px;
width: 26px;
// transition:0.2s;
// &:hover {
//   .list-li {
//      background-color: red;
//    }
//   background-color:#ee0008;
// }
.tick {
  margin-right: 2px;
  transition:0.2s;
&:hover {
  .list-li {
     background-color: red;
   }
  background-color:green;
}
}
.cross {
  transition:0.2s;
&:hover {
  .list-li {
     background-color: red;
   }
  background-color:#ee0008;
}
  
}
}

`

export default List

