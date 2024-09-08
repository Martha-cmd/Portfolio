import React from "react";
import SWIJ from "../../../assets/images/Group 3.png";
import PlayLogo from "../../../assets/logos/vecteezy_google-play-store-icon-logo-symbol_22484511.png";
import { FaApple } from "react-icons/fa";

const FashionAcademy = () => {
  return (
    <>
      <main className="w-full lg:px-[180px] md:px-[50px] px-[20px] mt-52 mb-32">
        <p className="lightgrey font-bold text-5xl mb-4">Online Course App</p>

        <p className="grey font-light md:text-2xl text-lg">
          The Online Course App for a Fashion Academy is a comprehensive
          educational platform designed to provide seamless access to a wide
          range of fashion courses. This app is built with a focus on delivering
          high-quality video content, protecting intellectual property, and
          ensuring a smooth user experience through advanced technical
          implementations.
        </p>

        <p className="grey font-bold md:text-2xl text-lg mt-10 mb-20">
          Key Features
        </p>

        <div className="w-full flex justify-center">
          <img src={SWIJ} alt="" className="w-[30rem] h-[20rem]" />
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Course Accessibility and Management
          </p>

          <p>
            {" "}
            <span className="font-medium">
              Admin-Controlled Course Library:{" "}
            </span>
            The admin can upload, manage, and categorize courses, ensuring that
            users have access to a well-organized repository of educational
            content.
          </p>

          <p>
            {" "}
            <span className="font-medium"> Course Categorization: </span>Courses
            are meticulously categorized to enable users to easily navigate
            through various topics within the fashion industry and according to
            their level at expertise at the time.
          </p>
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Enhanced User Experience
          </p>

          <p>
            {" "}
            <span className="font-medium">
              High-Quality Video and Audio Player:{" "}
            </span>
            The app features a robust media player capable of streaming
            high-definition video and audio content, offering users an immersive
            learning experience..
          </p>

          <p>
            {" "}
            <span className="font-medium">Full-Screen Video Playback: </span>
            Users can enjoy videos in full-screen mode, enhancing their viewing
            experience and focusing entirely on the content.
          </p>

          <p>
            {" "}
            <span className="font-medium">Video Downloads: </span>Allows users
            to download videos for offline viewing, ensuring uninterrupted
            learning even without internet access.
          </p>
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Seamless Authentication and Payment Integration
          </p>

          <p>
            {" "}
            <span className="font-medium">User Authentication: </span>Features
            robust authentication mechanisms, including login, sign-up and
            password recovery, ensuring secure access to the app.
          </p>

          <p>
            {" "}
            <span className="font-medium">
              Third-Party Payment Integration:{" "}
            </span>
            Seamlessly integrates with third-party payment gateways, allowing
            users to purchase courses effortlessly and securely.
          </p>
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Admin Features
          </p>

          <p>
            {" "}
            <span className="font-medium">
              Admin App for Course Management:{" "}
            </span>
            Provides an admin interface for uploading course videos and images,
            editing course details, and monitoring app analytics.
          </p>

          <p>
            {" "}
            <span className="font-medium">App Analytics: </span>Enables the
            admin to track user engagement, course popularity, and other
            essential metrics to make informed decisions about content and app
            improvements.
          </p>
        </div>

        <p className="lightgrey font-bold text-5xl mb-4 mt-20">
          Technology Stack:
        </p>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p>
            {" "}
            <span className="font-medium">Flutter:</span> The app is built using
            Flutter, ensuring a smooth and responsive user experience across
            both iOS and Android platforms.
          </p>

          <p>
            {" "}
            <span className="font-medium">Firebase Integration: </span>Firebase
            for backend services including authentication, real-time database,
            cloud storage, and analytics. This integration ensures real-time
            updates and secure data handling.
          </p>

          <p>
            {" "}
            <span className="font-medium">API Integration: </span>Implemented
            REST APIs for efficient communication between the mobile application
            and the backend server, facilitating smooth data exchange and
            functionality.
          </p>

          <p>
            {" "}
            <span className="font-medium">Secure Media Playback: </span>Employed
            secure media playback techniques to prevent unauthorized access to
            the video content, including encryption and digital rights
            management (DRM) solutions.
          </p>
        </div>

        <p className="lightgrey font-bold text-5xl mb-4 mt-20">Conclusion:</p>
        <p className="grey font-light md:text-2xl text-lg">
          The Online Course App for a Fashion Academy is a testament to my
          technical proficiency in Flutter, Firebase integration, and secure
          application development. The project's success highlights my ability
          to deliver high-quality, user-friendly educational platforms while
          safeguarding intellectual property. I also learnt how to properly
          manage memory while retaining quality of the media files. Working on
          this app has enriched my experience in handling complex features and
          advanced security measures, ensuring the delivery of a reliable and
          engaging learning tool.
        </p>

        <div className="w-full mt-5 flex gap-5">
          <a
            href="https://play.google.com/store/apps/details?id=com.swifa.fashion_academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 flex items-center justify-center">
              <img src={PlayLogo} alt="" className="w-[15px]" />
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.swifa.fashion_academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 flex items-center justify-center">
              <FaApple size={20} />
            </div>
          </a>
        </div>
      </main>
    </>
  );
};

export default FashionAcademy;
