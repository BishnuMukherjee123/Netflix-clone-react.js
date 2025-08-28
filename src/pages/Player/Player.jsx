import React from 'react'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const { youtube, title } = useParams();
  const navigate = useNavigate()
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <img className='absolute top-5 left-5 w-12.5 cursor-pointer' src={back_arrow} alt="" onClick={()=>(navigate(-1))}/>
      <iframe className='rounded-[10px]' width='90%' height='90%' src={`https://www.youtube.com/embed/${youtube}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='flex items-center justify-between w-[90%]'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Player
