import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import { CiClock2 } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import PageTitle from "../components/PageTitle";
import { contactUs } from "../assets";
import HeaderTitle from "../components/HeaderTitle";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import api from "../api/api";

const ContactUs = () => {

    
   
      const [name,setName]=useState('')
      const [email,setEmail]=useState('')
      const [phone,setPhone]=useState('')
      const [subject,setSubject]=useState('')
      const [message,setMessage]=useState('')
      

   

    const handleSubmit = async (e) => {
        const complaint={
            name:name,
            email:email,
            phone:phone,
            subject:subject,
            message:message,
        }
        e.preventDefault();
        try{
            const response=await api.post('contact/addcomplaint',complaint);
            toast.success("Form submitted successfully! We will contact you soon.");

        }
        catch(e){
            console.log("error");
            toast.success("Some thing error occured.");
        }
        


        
    }  
       





    return (
        <div>
        <HeaderTitle title={"Contact Us"} subtitle={"24x7"}/>

        <div className="px-16 py-3">

           
            <PageTitle imgUrl={contactUs} title={ ' '} subtitle={' '} />





            <div class="grid grid-cols-2 gap-5 max-[1000px]:grid-cols-1 pb-16">
                <div className="p-4">
                    <h2 className=" text-2xl font-semibold text-gray-600">
                        Contact Information
                    </h2>

                    <p className="px-4 ">
                        We're delighted to hear from you and ready to assist with any
                        questions, concerns, or feedback you may have. Your communication is
                        valuable to us, and we strive to respond promptly to your inquiries
                    </p>

                    <div className="flex">
                        <div className="w-2/3">
                            <h2 className="text-gray-600 font-medium pt-4">The Office:</h2>

                            <div className="pl-4">
                                <h1 className="pt-3 flex items-center space-x-2">
                                    <i className="flex items-center">
                                        <IoLocationOutline className="text-2xl" />
                                    </i>
                                    <span>517646,Sricity,Andhra Pradesh,India</span>
                                </h1>

                                <h1 className="pt-5 flex items-center space-x-2">
                                    <i className="flex items-center">
                                        <MdOutlinePhone className="text-2xl" />
                                    </i>
                                    <span>1234567891</span>
                                </h1>

                                <h1 className="pt-5 flex items-center space-x-2">
                                    <i className="flex items-center">
                                        <VscMail className="text-2xl" />
                                    </i>
                                    <span>mail@123.com</span>
                                </h1>
                            </div>
                        </div>
                        <div className="w-1/3">


                            <h1 className="pt-8 flex items-center space-x-2">
                                <i className="flex items-center">
                                    <CiClock2 className="text-2xl" />
                                </i>
                                <span>
                                    Monday-Sataurday <br /> 11am-7pm.
                                </span>
                            </h1>

                            <h1 className="pt-5 flex items-center space-x-2">
                                <i className="flex items-center">
                                    <IoCalendarOutline className="text-2xl" />
                                </i>
                                <span>
                                    Sunday <br />
                                    11am-6pm.
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="p-4">
                    <h2 class="py-2 text-slate-600 text-lg">Got Any Questions?</h2>
                    <p class="mb-2 py-2 text-lg text-slate-500">
                        Use the form below to get in touch with the sales team
                    </p>
                  
                    <form onSubmit={handleSubmit} class=" mb-3">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="">
                                <label for="cname" class="sr-only">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="border p-2 w-full"
                                    id="cname"
                                    placeholder="Name *"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div class=" ">
                                <label for="cemail" class="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    class="border p-2 w-full"
                                    id="cemail"
                                    placeholder="Email *"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div class=" ">
                                <label for="cphone" class="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    class="border p-2 w-full"
                                    id="cphone"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e)=>setPhone(e.target.value)}

                                />
                            </div>

                            <div class="">
                                <label for="csubject" class="sr-only">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    class="border p-2 w-full"
                                    id="csubject"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e)=>setSubject(e.target.value)}
                                />
                            </div>
                        </div>

                        <div class="pt-3">
                            <label for="cmessage" class="sr-only">
                                Message
                            </label>
                            <textarea
                                class="border p-2 w-full"
                                cols="30"
                                rows="4"
                                id="cmessage"
                                required
                                placeholder="Message *"
                                value={message}
                                    onChange={(e)=>setMessage(e.target.value)}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class =" bg-sky-600  px-4 py-2 mt-3 rounded-sm  hover:bg-sky-500 hover:text-white "
                        >
                            <span>SUBMIT</span>
                            <i class="icon-long-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-y border-gray-200 py-4">
                <h1 className="flex justify-center text-xl font-bold pt-5 pb-7">

                    Our Stores
                </h1>

                <div className="grid grid-cols-2 max-[1000px]:grid-cols-1 gap-7">
                    <div className="flex gap-3 pl-10">
                        <img src="https://d-themes.com/react/molla/demo-24/images/stores/img-1.jpg"></img>

                        <div className="p-7 gap-3">
                            <h3 className="font-semibold">
                                Rugged Main
                            </h3>
                            <p className="pt-4">
                                Sricity,Andhra Pradesh <br />
                                India
                                <br />
                                08672 343872
                            </p>
                            <h3 className="font-semibold pt-7">Store hours:</h3>
                            <p>11:00 am-7:00 pm<br />
                                Sunday 11:00am-6:00pm</p>

                        </div>
                    </div>

                    <div className="flex gap-3 pl-10">
                        <img src="https://d-themes.com/react/molla/demo-24/images/stores/img-2.jpg"></img>

                        <div className="p-7 gap-3">
                            <h3 className="font-semibold">
                                Rugged Chennai
                            </h3>
                            <p className="pt-4">
                                Chennai,Tamil Nadu <br />
                                India
                                <br />
                                08672 343873
                            </p>
                            <h3 className="font-semibold pt-7">Store hours:</h3>
                            <p>11:00 am-7:00 pm<br />
                                Sunday 11:00am-6:00pm</p>

                        </div>
                    </div>
                </div>
            </div>

            <div>Map</div>
        </div>
        </div>
    );
};

export default ContactUs;
