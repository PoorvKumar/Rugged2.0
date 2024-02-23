import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Blog = () => {
    const [isCustomer, setIsCustomer] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBlogger, setIsBlogger] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); 
    const navigate=useNavigate()
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
  console.log(isAdmin);
  console.log(isSeller);
  console.log(isBlogger);
  console.log(isAdmin);
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
                date={true}
                val="Customer"
                CardTitle="ThankYou for Value Customer"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isCustomer && (
              <BlogCard
                date={false}
                val={"Customer"}
                CardTitle="Please Login to Become our Customer"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {(isSeller || isAdmin) && (
              <BlogCard
                date={true}
                val={"Seller"}
                CardTitle="ThankYou for Value Seller"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isSeller && (
              <BlogCard
                date={false}
                val={"Seller"}
                CardTitle="You can become seller"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {(isBlogger || isAdmin) && (
              <BlogCard
                date={true}
                val={"Blogger"}
                CardTitle="ThankYou for Value Blogger"
                CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
              />
            )}
            {!isBlogger && (
              <BlogCard
                date={false}
                val={"Blogger"}
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

const BlogCard = ({ image, date, CardTitle, CardDescription, val }) => {
   const navigate = useNavigate();
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {(!date && val === "Customer") && (
              <button
                className="bg-cyan-950"
                onClick={() => {
                  navigate("/signin");
                }}
              >Login</button>
            )}
            {(!date && val === "Seller") && (
              <button
                onClick={() => {
                  navigate("/becomeseller");
                }}
              >Become Seller</button>
            )}
            {(!date && val === "Blogger") && (
              <button
                onClick={() => {
                  navigate("/blogs");
                }}
              >Become Blogger</button>
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

