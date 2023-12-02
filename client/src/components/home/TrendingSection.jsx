import React from 'react';
import { trend1, trend2, trend3, trend4, trend5 } from "../../assets";
import ImageCard from './ImageCard';

const TrendingSection = () => {
    return (
        <div className='container'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div className=''>
                    <ImageCard playfair={true} heading={"Trending"} title={"Camping & Hiking"} imgSrc={trend1} desc={"Explore diverse camping and hiking gear options from our extensive curated collection today."} />
                </div>
                <div className=''>
                    <div className='grid grid-cols-2'>
                        {/* <div className='relative group bg-cover h-auto bg-center' style={{ backgroundImage: `url(${imgSrc})` }}>
                            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-black"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
                                <p className={`${playfair ? 'font-playfair italic font-bold text-3xl' : 'uppercase text-xl'} text-white tracking-wide  `}>
                                    {heading}
                                </p>
                                <h5 className='text-white uppercase font-bold tracking-wider text-5xl -mt-2'>
                                    {title}
                                </h5>
                                <p className="text-sm mb-4">{desc}</p>

                                <div className='flex justify-center items-center'>
                                    <a href="/" className='bg-transparent border border-cyan-500 border-1 hover:bg-cyan-600 transition duration-300 ease-in-out py-3 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                                        discover now
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        <ImageCard playfair={false} heading={"Women's"} title={"Active & Fitness"} imgSrc={trend2} btnText={"Shop now"} colorTxt={true}/>
                        <ImageCard playfair={false} heading={"New Arrivals"} title={"Deepest discount season"} imgSrc={trend3} btnText={"Shop now"}/>
                        <ImageCard playfair={false} heading={"Men's"} title={"Surf gears & accessories"} imgSrc={trend4} btnText={"Shop now"}/>
                        <ImageCard playfair={false} heading={"Men's"} title={"Outerwear Collection"} imgSrc={trend5} btnText={"Shop now"} colorTxt={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingSection;