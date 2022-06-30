import React from 'react'



interface IProps { 
    data: {
  id: number,
  task: string,
}[],
  id: number,
  setData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
  completeData: {
    id: number,
    task: string,
  }[],
  setCompleteData: React.Dispatch<React.SetStateAction<{ id: number; task: string; }[]>>
}


const CheckList: React.FC<IProps> = ({id, setData, data, completeData, setCompleteData}) => {


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
    setCompleteData((curr: IProps['completeData']) => {
        let newData = [...data]
        let filt = newData.filter((check) => {
            if(check.id === id) {
                return check
            } else {
                return;
            }
        })
  
        
        return [...filt, ...curr]
    })
}



  return (
    <strong> <button onClick={handleClick}  ><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></button> </strong>
  )
}

export default CheckList