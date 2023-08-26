import React from 'react'

const University_Card = ({university}) => {
  return (
    <div className='text-cyan-800 font-semibold text-lg hover:font-bold shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 w-full md:w-[20%] lg:w-[20%] text-center rounded-xl hover:scale-110 hover:cursor-pointer transition-all duration-200 ease-in-out'>
      <p>{university.uniName}</p>
    </div>
  )
}

export default University_Card
