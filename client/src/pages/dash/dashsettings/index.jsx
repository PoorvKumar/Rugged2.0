import React, { useEffect, useState } from "react";

// export default function DashSettings() {
//   const [isCustomer, setIsCustomer] = useState(false);
//   const [isSeller, setIsSeller] = useState(false);
//   const [isBlogger, setIsBlogger] = useState(false);

//   useEffect(() => {
//     // Retrieve user roles from local storage
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const { isCustomer, isSeller, isBlogger } = JSON.parse(storedUser);
//       setIsCustomer(isCustomer);
//       setIsSeller(isSeller);
//       setIsBlogger(isBlogger);
//     }
//   }, []);

//   return (
//     <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
//       {isCustomer && <p>Welcome, valuable customer!</p>}
//       {!isCustomer && (
//         <div>
//           <p>If you are a customer, join us now!</p>
//           <button onClick={() => (window.location.href = "/become-customer")}>
//             Become a Customer
//           </button>
//         </div>
//       )}
//       {isSeller && <p>Welcome, esteemed seller!</p>}
//       {!isSeller && (
//         <div>
//           <p>If you are a seller, join us now!</p>
//           <button onClick={() => (window.location.href = "/become-seller")}>
//             Become a Seller
//           </button>
//         </div>
//       )}
//       {isBlogger && <p>Welcome, distinguished blogger!</p>}
//       {!isBlogger && (
//         <div>
//           <p>If you are a blogger, join us now!</p>
//           <button onClick={() => (window.location.href = "/become-blogger")}>
//             Become a Blogger
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
// import React from "react";

const Blog = () => {
    const [isCustomer, setIsCustomer] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBlogger, setIsBlogger] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      // Retrieve user roles from local storage
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const { isCustomer, isSeller, isBlogger,isAdmin } = JSON.parse(storedUser);
        setIsCustomer(isCustomer);
        setIsSeller(isSeller);
          setIsBlogger(isBlogger);
          setIsAdmin(isAdmin)
      }
    }, []);
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  DashBoard
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Welcome to Rugged
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae possimus necessitatibus tempore quod, repellat sequi
                  laborum laboriosam numquam dolore voluptatem?
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            {(isCustomer || isAdmin) && (
              <BlogCard
                date={<p>Disabled</p>}
                CardTitle="ThankYou for Value Customer"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isCustomer && (
              <BlogCard
                date={<p>Disabled</p>}
                CardTitle="Please Login to Become our Customer"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {(isSeller || isAdmin) && (
              <BlogCard
                date={<p>Disabled</p>}
                CardTitle="ThankYou for Value Seller"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isSeller && (
              <BlogCard
                date={<p>Disabled</p>}
                CardTitle="You can become seller"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {(isBlogger || isAdmin) && (
              <BlogCard
                date="Dec 22, 2023"
                CardTitle="ThankYou for Value Blogger"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isBlogger && (
              <BlogCard
                date={<p>Disabled</p>}
                CardTitle="You can Become Blogger"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

