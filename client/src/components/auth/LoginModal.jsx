import React, { useState } from 'react';
import climbingMountain from "../../assets/Climbing-amico.png";
import { PiEyeDuotone, PiEyeSlashDuotone } from "react-icons/pi";

const LoginModal = () => {

    const [showPass, setShowPass] = useState(true);

    return (
        <div className='bg-gray-50 flex rounded-2xl max-w-3xl h-[75vh] shadow-lg p-3'>
            <div className='w-full sm:w-1/2 px-8'>
                <h2 className='font-bold text-2xl text-purple mt-4'>Login</h2>
                <p className='text-sm mt-4'>If you are already a member, easily log in</p>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <input type="email" className='p-2 mt-8 rounded-xl border ' name="email" id="email" placeholder='Email' />
                    <div className='relative'>
                        <input type={showPass ? "text" : "password"} className='p-2 rounded-xl border w-full' name="password" id="password" placeholder='Password' />
                        <button type='button' className='absolute top-1/2 right-3 -translate-y-1/2 text-gray' onClick={() => setShowPass(!showPass)}>
                            {showPass ? <PiEyeDuotone /> : <PiEyeSlashDuotone />}
                        </button>
                    </div>
                    <button type='submit' className='rounded-xl py-2 text-white bg-purple-700'>Login</button>
                </form>
                <div className='mt-10 grid grid-cols-3 items-center text-slate-500'>
                    <hr className='text-slate-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='text-slate-500' />
                </div>

                <button></button>
            </div>
            <div className='sm:block hidden w-1/2 p-5 flex justify-center items-center bg-purple-900 rounded-2xl'>
                <img src={climbingMountain} className='rounded-2xl' />
            </div>
        </div>
    )
}

export default LoginModal;