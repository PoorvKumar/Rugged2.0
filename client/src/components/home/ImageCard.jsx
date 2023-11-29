import React from 'react'

const ImageCard = ({ heading, title, desc, imgSrc,playfair, btnText, colorTxt }) => {
    return (
        <div className={`relative group bg-cover ${playfair?'h-[80vh]':'h-[40vh]'} bg-center`} style={{backgroundImage: `url(${imgSrc})`}}>
            {/* <img
                className="w-full h-auto"
                src={imgSrc}
                alt="trend1"
            /> */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-black"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-4 z-10">
                <p className={`${playfair?'font-playfair italic font-bold text-3xl text-white':'uppercase text-sm text-slate-500'}  tracking-wide  `}>
                    {heading}
                </p>
                <h5 className={`uppercase font-bold tracking-wider ${btnText?'text-3xl':'text-5xl'} ${colorTxt?'text-black':'text-white'} -mt-2`}>
                    {title}
                </h5>
                <p className="text-sm mb-2">{desc}</p>

                <div className='flex justify-center items-center'>
                    <a href="/" className='bg-transparent border border-cyan-300 shadow-lg border-2 hover:bg-cyan-300 transition duration-300 ease-in-out py-3 px-4 rounded-lg font-bold uppercase text-xs text-cyan-500 hover:text-white'>
                        {btnText?btnText:"discover now"}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ImageCard;