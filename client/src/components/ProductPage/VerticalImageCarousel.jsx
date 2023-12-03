import React, { useState } from "react";
const VerticalImageCarousel = ({ data, txtList, isModal }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleClick = (index) => {
    setSelectedItem(index);
  };

  // const colours = [
  //   {
  //     c1: "bg-[#2563eb]",
  //     c2: "dark:bg-[#dbeafe]",
  //     c3: "dark:text-[#172554]",
  //   },
  //   {
  //     c1: "bg-[#fb8c00]",
  //     c2: "dark:bg-[#ffe0b2]",
  //     c3: "dark:text-[#e65100]",
  //   },
  //   {
  //     c1: "bg-[#43a047]",
  //     c2: "dark:bg-[#c8e6c9]",
  //     c3: "dark:text-[#1b5e20]",
  //   },
  //   {
  //     c1: "bg-[#e53935]",
  //     c2: "dark:bg-[#ffcdd2]",
  //     c3: "dark:text-[#b71c1c]",
  //   },
  //   {
  //     c1: "bg-[#fdd835]",
  //     c2: "dark:bg-[#fff9c4]",
  //     c3: "dark:text-[#f57f17]",
  //   },
  //   {
  //     c1: "bg-[#8e24aa]",
  //     c2: "dark:bg-[#e1bee7]",
  //     c3: "dark:text-[#4a148c]",
  //   },
  //   {
  //     c1: "bg-[#d81b60]",
  //     c2: "dark:bg-[#f8bbd0]",
  //     c3: "dark:text-[#880e4f]",
  //   },
  // ];
  return (
    <div className="grid grid-cols-6 mt-2">
      <div
        className={`${isModal ? "hidden" : "hidden md:block col-span-1 px-2"} `}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer p-[2px] mb-2 h-auto w-5/6 hover:bg-cyan-950 dark:hover:bg-cyan-50 ${
              selectedItem === index
                ? "bg-cyan-600 dark:bg-cyan-200"
                : "bg-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            {item.type === "image" ? (
              <img
                src={item.source}
                alt={`Image ${index + 1}`}
                className="w-full rounded-3xl"
              />
            ) : (
              <video
                src={item.source}
                controls
                className="w-full rounded-3xl"
              ></video>
            )}
          </div>
        ))}
      </div>
      <div
        className={`${
          isModal ? "col-span-6 block" : "col-span-6 md:col-span-5 block"
        }`}
      >
        <div className="z-10 hidden md:flex flex-row flex-wrap relative">
          {txtList.map((txt, i) => {
            // const mod_i = Number(i%7);
            return (
              <div
                className={`text-center rounded-[1.5rem] px-2 py-1 m-1 bg-cyan-900 text-white `}
                /*className={`text-center rounded-[1.5rem] px-2 py-1 m-1 bg-cyan-600 ${colours[mod_i].c1} ${colours[mod_i].c2} ${colours[mod_i].c3} text-white `}*/
                key={i}
              >
                {txt}
              </div>
            );
          })}
        </div>
        <div className="hidden max-sm:absolute max-sm:flex max-sm:h-[25%] max-sm:w-[80%] max-sm:mt-0  max-md:absolute max-md:flex max-md:h-[50%] max-md:w-[85%] flex-wrap flex-row justify-between items-center mt-12">
          <button
            className="z-20 text-xl px-2 bg-cyan-600 rounded-full"
            onClick={() => {
              setSelectedItem((prevState) => {
                if (prevState > 0) {
                  return (prevState -= 1);
                }
                return data.length - 1;
              });
            }}
          >{`<`}</button>
          <button
            className="z-20 text-xl px-2 bg-cyan-600 rounded-full"
            onClick={() => {
              setSelectedItem((prevState) => {
                if (prevState < data.length - 1) {
                  return (prevState += 1);
                } else {
                  return 0;
                }
              });
            }}
          >{`>`}</button>
        </div>
        {data[selectedItem].type === "image" ? (
          <div className={`mt-[-3rem] flex flex-row items-center`}>
            <img
              src={data[selectedItem].source}
              alt={`Image ${selectedItem + 1}`}
              className="w-full md:w-5/6 h-full md:h-5/6 z-0 rounded-3xl"
            ></img>
          </div>
        ) : (
          <div className="mt-[-3rem]">
            <video
              src={data[index].source}
              controls
              className="w-full md:w-5/6 h-full md:h-5/6 rounded-3xl"
            ></video>
          </div>
        )}
        {isModal && (
          <div
            className={`${
              !isModal ? "hidden" : "hidden md:flex flex-row px-2 justify-start"
            } `}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer p-[2px] mb-2 mx-2 h-fit w-fuit hover:bg-cyan-950 dark:hover:bg-cyan-50 ${
                  selectedItem === index
                    ? "bg-cyan-600 dark:bg-cyan-200"
                    : "bg-gray-300"
                }`}
                onClick={() => handleClick(index)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.source}
                    alt={`Image ${index + 1}`}
                    className="w-[6rem] rounded-xl h-[6rem]"
                  />
                ) : (
                  <video
                    src={item.source}
                    controls
                    className="w-[6rem] rounded-xl h-[6rem]"
                  ></video>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalImageCarousel;

// import { Carousel, Typography, Button } from "@material-tailwind/react";

// export function CarouselWithContent() {
//   return (
//     <Carousel className="rounded-xl">
//       <div className="relative h-full w-full">
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="image 1"
//           className="h-full w-full object-cover"
//         />
//         {/* <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
//           <div className="w-3/4 text-center md:w-2/4">
//             <Typography
//               variant="h1"
//               color="white"
//               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
//             >
//               The Beauty of Nature
//             </Typography>
//             <Typography
//               variant="lead"
//               color="white"
//               className="mb-12 opacity-80"
//             >
//               It is not so much for its beauty that the forest makes a claim
//               upon men&apos;s hearts, as for that subtle something, that quality
//               of air that emanation from old trees, that so wonderfully changes
//               and renews a weary spirit.
//             </Typography>
//             <div className="flex justify-center gap-2">
//               <Button size="lg" color="white">
//                 Explore
//               </Button>
//               <Button size="lg" color="white" variant="text">
//                 Gallery
//               </Button>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </Carousel>
//   );
// }
