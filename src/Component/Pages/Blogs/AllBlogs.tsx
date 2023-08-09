import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBloags] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(blogs)
  useEffect(() => {
    // Side effect code goes here
    // This code will run after the component is mounted

    async function fetchData() {
      try {
        const response = await fetch(
          "https://spoken-english-server.vercel.app/blogs"
        );
        const jsonData = await response.json();
        setLoading(false);
        setBloags(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData(); // Call the async function to fetch data
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="bg-white">
      <section className="title flex justify-center items-center gap-5">
        <div className="flex flex-col items-center justify-start">
          <p className="text-3xl font-bold">From</p>
          <p className="text-3xl font-bold text-left">The</p>
        </div>
        <p className="text-8xl font-bold">Blogs</p>
      </section>
      <section className="blogs py-5">
        <div className="w-[96%] md:w-[90%] mx-auto">
          {blogs.map((blog) => (
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4  py-7">
                <p className="text-2xl text-justify">{blog.blog_name}</p>
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-[300px] mt-5"
                />
                <p className="font-bold text-justify mt-5">
                  {blog.blog_short_description}
                </p>
              </div>
              <div className="flex justify-center mb-3">
                <Link
                  className="text-center py-1 px-3  border border-fuchsia-900 font-bold hover:bg-black hover:text-white absolute bottom-0 md:bottom-3 bg-[rgba(0,0,0,0.6)] text-white"
                  to={`blog/${blog._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
    
      </section>
    </div>
  );
};

export default AllBlogs;
