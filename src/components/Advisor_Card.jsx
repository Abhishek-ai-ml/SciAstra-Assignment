import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
const Advisor_Card = ({adv}) => {
  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-cyan-800 font-semibold flex flex-col items-center p-5 w-[25%] hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-200 ease-in-out rounded-xl hover:scale-110 text-center group'>
      {
        adv.id === 1 ? <div className="pb-5 text-3xl font-semibold">Mentor & Advisor</div> : <div></div>
      }
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-full'><AiOutlineUser size={80}/></div>
      <div className='pt-3 group-hover:font-bold'>{adv.name}</div>
      <div className='group-hover:font-bold'>{adv.designation}</div>
      {
        adv.id !== 1 ? <div className=' border-cyan-800 border-[1px] px-5 py-2 mt-3 hover:bg-cyan-800 hover:text-white transition-all duration-200 ease-in-out hover:cursor-pointer flex gap-x-3 items-center'>Message him now <span><FaTelegramPlane size={20}/></span></div> : <div></div>
      }
    </div>
  )
}

export default Advisor_Card