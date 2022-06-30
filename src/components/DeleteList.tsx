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
        
                
                if(filt.id === id) {
                    return;
                } else {
                    return filt
                }
                
            })
        })
    }

  return (
    <strong> <button onClick={handleClick} ><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button> </strong>
  )
}

export default DeleteList