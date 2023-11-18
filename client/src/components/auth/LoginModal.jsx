import React, { useState } from 'react';
import climbingMountain from "../../assets/Climbing-amico.png";
import travelling_river from "../../assets/travelling_river.png";
import { PiEyeDuotone, PiEyeSlashDuotone } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LoginModal = ({ onClose }) => {

    const [showPass, setShowPass] = useState(false);

    return (
        <div className='bg-gray-50 flex rounded-2xl max-w-3xl shadow-lg p-2 relative'>
            <button onClick={onClose} className='absolute top-2 right-2 text-xl flex justify-center bg-black rounded-3xl text-white items-center'>
                <AiOutlineCloseCircle />
            </button>
            <div className='w-full sm:w-1/2 px-8'>
                <h2 className='font-bold text-2xl text-purple mt-4'>Login</h2>
                <p className='text-sm mt-4'>If you are already a member, log in here</p>
                <form className='flex flex-col gap-4'>
                    <input type="email" className='p-2 mt-8 rounded-xl border ' name="email" id="email" placeholder='Email' />
                    <div className='relative'>
                        <input type={showPass ? "text" : "password"} className='p-2 rounded-xl border' name="password" id="password" placeholder='Password' />
                        <button type='button' className='absolute top-1/2 right-3 -translate-y-1/2 text-gray' onClick={() => setShowPass(!showPass)}>
                            {showPass ? <PiEyeDuotone /> : <PiEyeSlashDuotone />}
                        </button>
                    </div>
                    <button type='submit' className='rounded-xl py-2 px-4 text-white bg-[#27a6e6e6] hover:scale-105 duration-300'>Login</button>
                </form>
                <div className='mt-10 grid grid-cols-3 items-center text-slate-500'>
                    <hr className='text-slate-500' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='text-slate-500' />
                </div>

                <button className='bg-white border py-2 w-full rounded-xl mt-5 flex gap-2 justify-center items-center hover:scale-105 duration-300'><FcGoogle /> Login with Google</button>

                <p className='mt-10 text-xs border-b py-4 underline underline-offset-2'>Forgot your Password?</p>

                <div className='mt-3 text-xs flex justify-between items-center'>
                    <p>If you don't have an accound</p>
                    <button className='px-5 py-2 bg-white border rounded-xl hover:scale-105 duration-300'>Register</button>
                </div>
            </div>
            <div className='sm:block hidden w-1/2 p-5 flex justify-center items-center rounded-2xl' style={{ backgroundImage: 'linear-gradient(to bottom, #27a6e6e6, #32d3cee6)' }}>
                <img src={travelling_river} className='rounded-2xl' />
            </div>
        </div>
    )
}

export default LoginModal;