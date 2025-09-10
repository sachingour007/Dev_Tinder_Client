import React from "react";
import HompageCard from "./HompageCard";
import { hpCardData } from "../constant/hpCardData";
import TextRoatate from "./TextRoatate";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="mb-[50px] lg:mb-[100px]">
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
                Find your idea coding collaborator
              </h1>
              <p className="py-3.5 lg:py-6 font-winkyRough">
                Connect with fellow developers based on skill, hobbies and
                coding preferences.
              </p>
              <Link to={"/singup"}>
                <button className="btn btn-primary tracking-[0.5px]">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrapper mb-[50px] lg:mb-[100px]">
          <h2 className="text-center font48 tracking-wide leading-[140%] font-bold mb-5">
            What We Offer
          </h2>
          <div className="flex justify-center gap-5 lg:px-[100px]">
            {hpCardData.map((el) => (
              <HompageCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </section>
      <section className="text-center py-20 px-4 bg-base-300 text-white mb-[50px] lg:mb-[100px]">
        <h2 className="font-bold mb-6 font40">Why We Build Together</h2>
        <TextRoatate />
      </section>
    </>
  );
};

export default Homepage;
