import React from 'react'

interface IProps { 
      data: {
    id: number,
    task: string,
  }[],
    id: number,
    setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
}

const DeleteList: React.FC<IProps> = ({id, setData, data }) => {

    const handleClick = () => {
        setData((curr: IProps['data']) => {
            let newData = [...curr]
            return newData.filter((filt) => {
                console.log(filt);
                
                if(filt.id === id) {
                    return;
                } else {
                    return filt
                }
                
            })
        })
    }

  return (
    <strong> <button onClick={handleClick} >X</button> </strong>
  )
}

export default DeleteList