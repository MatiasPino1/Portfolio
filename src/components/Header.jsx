import React from "react";
import Robot from "../../public/img/robot.png";
export const Header = () => {
  return (
    <>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={Robot} class="h-96 max-w-sm rounded-lg" />
          <div>
            <h1 class="mb-4 font-heading font-bold text-white text-6xl sm:text-7xl italic">MATIAS ASENJO </h1>
            <h3 className="mt-3 text-3xl text-white">Full Stack Web developer</h3>
            <p class="py-3 text-white mt-3">
              Currently located in Cordoba, Argentina. I am recently graduated
              from the National Technological University with experience building API Rest and React Components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
