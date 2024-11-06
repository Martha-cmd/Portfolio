import React from "react";
import KeduApp from "../../../assets/images/Group 2.png";
import SubScreen from "../../../assets/images/Frame 213.png";
import PlayLogo from "../../../assets/logos/vecteezy_google-play-store-icon-logo-symbol_22484511.png";
import { FaApple } from "react-icons/fa";

const MusicApp = () => {
  return (
    <>
      <main className="lg:px-[180px] md:px-[50px] px-[20px] mt-52 mb-32">
        <p className="lightgrey font-bold text-5xl mb-4">Music Streaming App</p>

        <p className="grey font-light md:text-2xl text-lg">
          The Music Streaming App is a dynamic and feature-rich mobile
          application designed specifically for a religious organization,
          enabling its members to engage deeply with spiritual content. The app
          offers a seamless experience for streaming music, listening to
          sermons, and participating in live programs. With a subscription-based
          model, users gain access to exclusive content and additional features,
          fostering a close-knit community centered around faith and worship.
        </p>

        <p className="grey font-bold md:text-2xl text-lg mt-10">Key Features</p>

        <div className="w-full flex lg:flex-row flex-col mt-20 items-center lg:gap-10 gap-20">
          <img src={KeduApp} alt="" className="w-72 h-full" />

          <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10">
            <p className="grey font-bold md:text-2xl text-lg mt-10">
              Music Streaming:
            </p>

            <p>
              {" "}
              <span className="font-medium">Extensive Library:</span> Access to
              a vast collection of religious songs and hymns.
            </p>

            <p>
              {" "}
              <span className="font-medium"> Curated Playlists: </span>Users can
              explore playlists curated by the organization and create
              personalized ones.
            </p>

            <p>
              {" "}
              <span className="font-medium"> Categorized Content: </span>Content
              are categorized so that users can easily find sermons categorized
              by topic, speaker, or date.
            </p>
          </div>
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Live Streaming:
          </p>

          <p>
            {" "}
            <span className="font-medium">Real-Time Broadcasts:</span>{" "}
            Participate in live events, services, and special programs streamed
            directly through the app.
          </p>

          <p>
            {" "}
            <span className="font-medium"> On-Demand Sermons: </span>Listen to
            sermons at your convenience, with options to save favorites for
            later.
          </p>
        </div>

        <div className="w-full flex lg:flex-row flex-col mt-20 items-center lg:gap-10 gap-20">
          <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
            <p className="grey font-bold md:text-2xl text-lg mt-10">
              Subscription Model:
            </p>

            <p>
              {" "}
              <span className="font-medium">Exclusive Access:</span> Subscribe
              to unlock premium content such as special sermons, exclusive
              songs, and additional app features.
            </p>

            <p>
              {" "}
              <span className="font-medium"> Flexible Plans: </span>Choose from
              various subscription plans tailored to different needs and
              budgets.
            </p>
          </div>

          <img src={SubScreen} alt="" className="w-72 h-full" />
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">Downloads:</p>

          <p>
            {" "}
            <span className="font-medium">Offline Access:</span> Download songs
            and sermons for offline listening, ensuring access to spiritual
            content anytime, anywhere.
          </p>
        </div>

        <div className="grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10">
          <p className="grey font-bold md:text-2xl text-lg mt-10">
            Authentication and Security:
          </p>

          <p>
            {" "}
            <span className="font-medium">User Accounts:</span> Sign up and log
            in with ease using email or social media accounts.
          </p>

          <p>
            {" "}
            <span className="font-medium"> OTP Authentication:</span>Secure your
            account with OTP (One-Time Password) verification.
          </p>

          <p>
            {" "}
            <span className="font-medium"> Password Recovery: </span>Recover
            forgotten passwords through a secure and straightforward process.
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
            <span className="font-medium">REST APIs:</span> Integration with
            RESTful APIs allows seamless communication between the app and
            backend servers, enabling functionalities such as streaming,
            downloads, and user authentication.
          </p>

          <p>
            {" "}
            <span className="font-medium">
              Third-Party Payment Integration:
            </span>{" "}
            Secure and efficient payment gateways are integrated to handle
            subscriptions, supporting various payment methods for user
            convenience.
          </p>
        </div>

        <p className="lightgrey font-bold text-5xl mb-4 mt-20">Conclusion:</p>
        <p className="grey font-light md:text-2xl text-lg">
          The Music Streaming App showcases a modern solution for spiritual
          engagement, offering features like music streaming, live events, and
          secure user authentication. My expertise in Flutter, API integration,
          and secure authentication mechanisms ensures the delivery of
          high-quality, reliable, and user-friendly applications. I am also
          grateful to my team who helped ensure the success of this app.
        </p>

        <div className="w-full mt-5 flex gap-5">
          <div className="w-10 h-10 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 flex items-center justify-center">
            <img src={PlayLogo} alt="" className="w-[15px]" />
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[0.2px] border-gray-700 flex items-center justify-center">
            <FaApple size={20} />
          </div>
        </div>
      </main>
    </>
  );
};

export default MusicApp;
