import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const Mentor_Card = ({mentor}) => {
  return (
    <div className=' w-[20%] flex flex-col items-center p-5 text-center hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-2xl hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out group'>
      <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-full'><AiOutlineUser size={80}/></div>
      <div className='pt-3 text-cyan-800 font-semibold group-hover:font-bold'>{mentor.mentorName}</div>
      <div className='text-cyan-800 font-semibold group-hover:font-bold'>{mentor.mentorUniv}</div>
    </div>
  )
}

export default Mentor_Card
