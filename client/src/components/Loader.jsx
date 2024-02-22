import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <img src="/rugged.svg" alt="logo" width={120} height={120} className='animate-pulse duration-700'  />
    </div>
  )
}

export default Loader