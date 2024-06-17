import React from 'react'
// import SWIJ from '../../../assets/images/Group 3.png'
import Foodie from '../../../assets/images/Group 1.png'
import Restaurant from '../../../assets/images/Group 1-3.png'
import Rider from '../../../assets/images/Group 3-2.png'



const FoodieApp = () => {
  return (
    <>
    <main className='w-full lg:px-[180px] md:px-[50px] px-[20px] mt-52 mb-32'>

            <p className='lightgrey font-bold text-5xl mb-4'>Foodie App: Comprehensive Food Delivery Solution</p>

            <p className='grey font-light md:text-2xl text-lg'>
                The Foodie App, developed for Foodie Company, is a robust food delivery platform designed to streamline the interaction between customers, restaurants, and delivery riders. The app ecosystem is segmented into three distinct applications: the Customer App, the Restaurant App, and the Rider App, each tailored to the specific needs of its user group.
            </p>

            <p className='grey font-bold md:text-2xl text-lg mt-10 mb-20'>Key Features</p>
            
            <p className='grey font-bold md:text-2xl text-lg mt-20 mb-10 lightgrey'>Customer App: Enhancing the Food Ordering Experience</p>

           
            <div className='w-full flex justify-center'>

                 <img src={ Foodie } alt="food-delivery app" className='w-[17rem] h-[20rem]'/>

            </div>
                   <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                                   <p className='grey font-bold md:text-2xl text-lg mt-10'>Food Browsing and Selection</p>

                                   <p> <span className='font-medium'>Location-Based Search: </span>Customers can browse through a curated list of restaurants and available food items based on their location.</p>

                                   <p> <span className='font-medium'>Cart Management: </span>Users can easily add items to their cart and modify orders before checking out.</p>

                                   <p> <span className='font-medium'>Secure Checkout: </span>Provides a seamless checkout process with various payment options, including wallet-based payments.</p>

                   </div>

                   <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                                   <p className='grey font-bold md:text-2xl text-lg mt-10'>Order Tracking and Rating</p>

                                   <p> <span className='font-medium'>Real-Time Order Tracking: </span>Customers can track their orders in real-time using integrated mapping APIs.</p>

                                   <p> <span className='font-medium'>Rider Rating: </span>After delivery, customers can rate their experience with the rider, ensuring quality service.</p>

                   </div>

                   <p className='grey font-bold md:text-2xl text-lg mt-20 mb-10 lightgrey'> Restaurant App: Efficient Order Management</p>

                   <div className='w-full flex justify-center'>

                      <img src={ Restaurant } alt="food-delivery app" className='w-[17rem] h-[20rem]'/>

                   </div>


            <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                           <p className='grey font-bold md:text-2xl text-lg mt-10'>Menu Management</p>

                           <p> <span className='font-medium'>Food Uploading: </span>Restaurants can upload and manage their menu items, including descriptions, prices, and images.</p>

                           <p> <span className='font-medium'>Availability Control: </span>Allows restaurants to update the availability of dishes based on their stock.</p>
           </div>

            <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                           <p className='grey font-bold md:text-2xl text-lg mt-10'>Order Processing</p>

                           <p> <span className='font-medium'>Order Acceptance: </span>Restaurants receive and accept orders in real-time, streamlining the order management process.</p>

                           <p> <span className='font-medium'>Order Tracking: </span>Restaurants can monitor the delivery status of their orders, ensuring timely preparation and dispatch.</p>

           </div>

           <p className='grey font-bold md:text-2xl text-lg mt-20 mb-10 lightgrey'>Rider App: Streamlining Deliveries</p>

           <div className='w-full flex justify-center'>

                      <img src={ Rider } alt="food-delivery app" className='w-[17rem] h-[20rem]'/>

            </div>

            <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                           <p className='grey font-bold md:text-2xl text-lg mt-10'>Delivery Management</p>

                           <p> <span className='font-medium'>Delivery Acceptance: </span>Riders can view and accept delivery requests within their specified location.</p>

                           <p> <span className='font-medium'>Route Optimization: </span>Utilizes mapping APIs to provide the most efficient delivery routes, ensuring timely deliveries.</p>

           </div>

            <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>
                           <p className='grey font-bold md:text-2xl text-lg mt-10'>Order Tracking</p>

                           <p> <span className='font-medium'>Real-Time Updates: </span>Riders receive real-time updates on order status, helping them manage multiple deliveries efficiently.
                           </p>
           </div>

           <p className='lightgrey font-bold text-5xl mb-4 mt-20'>Technology Stack:</p>

           <div className='grey font-light md:text-2xl text-lg w-full flex flex-col gap-10 mt-10'>

                           <p> <span className='font-medium'>Flutter:</span> The app is built using Flutter, ensuring a smooth and responsive user experience across both iOS and Android platforms.</p>

                           <p> <span className='font-medium'>Firebase Integration: </span>Firebase for backend services including authentication, real-time database, cloud storage, and analytics. This integration ensures real-time updates and secure data handling.</p>

                           <p className='grey font-medium md:text-2xl text-lg grey'>Third-Party APIs: Integrated various third-party APIs to enhance app functionality, such as:</p>


                           <p> <span className='font-medium'>Mapping APIs: </span>For real-time order tracking and route optimization.</p>

                           <p> <span className='font-medium'>Payment APIs: </span>To provide secure and diverse payment options for customers.</p>

                           <p> <span className='font-medium'>Secure Authentication: </span>Implemented robust authentication mechanisms across all three apps to ensure secure access and data protection.</p>

           </div>

           <p className='lightgrey font-bold text-5xl mb-4 mt-20'>Conclusion:</p>
           <p className='grey font-light md:text-2xl text-lg'>The development of the Foodie App underscores my expertise in creating comprehensive, multi-faceted mobile applications. Utilizing Flutter, Firebase, and third-party APIs, I have crafted a seamless and efficient platform that caters to the diverse needs of customers, restaurants, and riders. This project highlights my ability to integrate advanced features and secure authentication mechanisms, ensuring the delivery of a high-quality, user-centric application. Additionally, working with a very supportive team played a crucial role in the success of this app, further honing my skills in developing scalable, reliable, and user-friendly solutions in the food delivery industry.</p>
     </main>       

</>
  )
}

export default FoodieApp