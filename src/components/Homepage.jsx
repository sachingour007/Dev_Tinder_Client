import React from "react";

const Homepage = () => {
  return (
    <>
      <section>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse py-8 lg:px-10 lg:gap-[50px] xl:gap-[70px]">
            <div className=" w-full lg:w-3/6">
              <img
                src="https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="w-full lg:w-3/6">
              <h1 className="text-5xl font-bold font60">
                Find you idea coding collaborator
              </h1>
              <p className="py-3.5 lg:py-6 font-winkyRough">
                Connect with fellow developers based on skill, hobbies and
                coding preferences.
              </p>
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Homepage;
