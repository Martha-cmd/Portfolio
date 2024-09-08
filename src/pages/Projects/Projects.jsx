import React from "react";
import KeduApp from "../../assets/images/Kedu.png";
import { FaHeadphones } from "react-icons/fa";
import FoodieApp from "../../assets/images/Group 1.png";
import SWIJApp from "../../assets/images/Group 1-2.png";
import SaintBridges from "../../assets/images/Screenshot 2024-06-14 at 11.08.26 PM.png";
import FoodieSite from "../../assets/images/Frame 255.png";
import SpearAca from "../../assets/images/Frame 49.png";
import HS from "../../assets/images/Frame 5.png";
import Docket from "../../assets/images/docket.gif";
import { MdOutlineElectricBike, MdPayments } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <main className="my-24 w-full h-full lg:px-[180px] px-[50px] mt-52 cursor-pointer">
        <p className="lightgrey font-bold text-5xl mb-4">Projects </p>
        <p className="grey font-light md:text-2xl text-lg">
          Check out some of my projects, in their different categories.
        </p>

        <div className="w-full mt-20">
          <p>Mobile Development</p>
          <div className="w-full h-full flex md:flex-row flex-col gap-10 items-end">
            <Link to="/kedu" className="w-full h-full mt-5">
              <div className="w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1">
                <img
                  src={KeduApp}
                  alt="music-streaming"
                  className="w-16 h-32"
                />
                <FaHeadphones className="" size={30} color="black" />
              </div>
              <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                Music Streaming App
                <p className="text-sm font-regular grey">
                  A music streaming and subscription based app
                </p>
              </div>
            </Link>

            <Link to="/foodie" className="w-full h-full mt-5">
              <div className="w-full h-40 bg-orange-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center">
                <img
                  src={FoodieApp}
                  alt="music-streaming"
                  className="w-32 h-36"
                />
              </div>
              <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                Food Delivery App
                <p className="text-sm font-regular grey">
                  A food delivery app that connects customers, restaurants and
                  riders
                </p>
              </div>
            </Link>

            <Link to="/swifa" className="w-full h-full mt-5">
              <div className="w-full h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center">
                <img
                  src={SWIJApp}
                  alt="music-streaming"
                  className="w-42 h-32"
                />
              </div>
              <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                Online Course App
                <p className="text-sm font-regular grey">
                  An online course app for a Fashion Academy
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full mt-20">
          <p>Web Development</p>
          <div className="w-full h-full flex md:flex-row flex-col gap-10 items-end">
            <div className="w-full h-full mt-5">
              <a
                href="https://7aintbridges.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-40 bg-black rounded-tr-lg rounded-tl-lg flex">
                  <img
                    src={SaintBridges}
                    alt="7aintBridges"
                    className="w-full"
                  />
                </div>
                <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                  E-commerce Website
                  <p className="text-sm font-regular grey">
                    A newsletter sign up page for an ecommerce website
                  </p>
                </div>
              </a>
            </div>

            <div className="w-full h-full mt-5">
              <div className="w-full h-40 bg-gradient-to-tr from-[#FED8CE] to-[#FBA68F] rounded-tr-lg rounded-tl-lg flex">
                <img
                  src={FoodieSite}
                  alt="Foodie Landing Page"
                  className="w-full"
                />
              </div>
              <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                Food Delivery Landing Page
                <p className="text-sm font-regular grey">
                  A food delivery landing page showcasing their services and app
                  features
                </p>
              </div>
            </div>

            <div className="w-full h-full mt-5">
              <a
                href="http://localhost:5173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-40 bg-purple-600 rounded-tr-lg rounded-tl-lg flex">
                  <img
                    src={Docket}
                    alt="Foodie Landing Page"
                    className="w-full"
                  />
                </div>
                <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                  Docket
                  <p className="text-sm font-regular grey">A Note taking app</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          <p>UI/UX Design</p>
          <div className="w-full h-full flex md:flex-row flex-col gap-10 items-end">
            <a
              href="https://dribbble.com/shots/23028358-Ecommerce-Website-Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-full mt-5">
                <div className="w-full h-40 bg-pink-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1">
                  <img src={HS} alt="" className="w-10 h-16" />
                  <p className="text-[1.5rem] font-black pt-5">
                    House of Satika
                  </p>
                </div>
                <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                  {" "}
                  E-commerce UI Kit
                  <p className="text-sm font-regular grey">
                    {" "}
                    A complete UI kit for e-commerce applications
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://dribbble.com/shots/23044248-Budify-Money-Budgeting-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-full mt-5">
                <div className="w-full h-40 bg-blue-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1">
                  <MdPayments size={50} />
                  <p className="text-[2rem] font-black pt-5">Budify</p>
                </div>
                <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                  Budify
                  <p className="text-sm font-regular grey">
                    A finance app for budgeting goals and fulfilling bucket
                    lists
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://dribbble.com/shots/24724194--Foodie-Customer-App-Design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full h-full mt-5">
                <div className="w-full h-40 bg-green-600 rounded-tr-lg rounded-tl-lg flex items-center justify-center gap-1">
                  <MdOutlineElectricBike size={60} />
                  <p className="text-[2rem] font-black">Foodie</p>
                </div>
                <div className="w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 rounded-br-lg rounded-bl-lg flex flex-col font-medium text-base lightgrey px-3 py-2">
                  Food Delivery App Design
                  <p className="text-sm font-regular grey">
                    A food delivery app that connects customers, restaurants and
                    riders{" "}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
