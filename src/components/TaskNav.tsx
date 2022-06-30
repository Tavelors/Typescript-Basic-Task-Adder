import React from 'react'
import styled from 'styled-components'

interface IProps {
    setChangeList: any
}

const TaskNav: React.FC<IProps> = ({setChangeList}) => {
  return (
    <StyledDiv>
        <ul>
            <li><button onClick={() => setChangeList(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Tasks</button></li>
            <li><button onClick={() => setChangeList(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Completed</button></li>
        </ul>
    </StyledDiv>
  )
}

const StyledDiv = styled.div/*css*/`
ul {
    li {
        margin: 10px;
        display: inline-block;
    }
}
`

export default TaskNav