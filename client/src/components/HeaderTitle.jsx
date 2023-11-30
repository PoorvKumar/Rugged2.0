import React from 'react'
import { headerBG } from '../assets'

const HeaderTitle = ({title,subtitle}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 bg-cover bg-center p-8' style={{backgroundImage: `url(${headerBG})`}}>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h2 className='text-md uppercasr text-slate-500'>{subtitle}</h2>
    </div>
  )
}

export default HeaderTitle