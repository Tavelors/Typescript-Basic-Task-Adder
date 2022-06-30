import React, {useState, useEffect}from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'


interface IProps { 
    completeData: {
      id: number,
      task: string,
    }[],
    setCompleteData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
  }

const Completed: React.FC<IProps> = ({completeData, setCompleteData}) => {


  return (
    <StyledDiv  >
        <h2>Completed Tasks</h2>
        <ol >
            {completeData.map((list) => {
              return  <li className='list-li' key={list.id} >
                <span className='span1' >
                {list.task}
                </span>
                <span className='span2' >
             
                </span>

              
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
h2 {
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight:bold;
    font-size: 2rem;
}
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
.span2 {
// position: relative;
margin-left:auto;
height: 24px;
width: 26px;
transition:0.2s;
&:hover {
  .list-li {
     background-color: red;
   }
  background-color:#ee0008;
}
}

`

export default Completed