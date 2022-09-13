import Card from "../UI/Card";
import { MapPinIcon } from '@heroicons/react/24/outline/index.js';
import { InformationCircleIcon } from '@heroicons/react/24/outline/index.js';
import { CheckIcon } from '@heroicons/react/24/outline/index.js';

function DetailsSection() {
    return (
        <section className="bg-Gradient bg-cover bg-center bg-blend-screen bg-sky-700 w-screen flex flex-col items-center">
             <img src="/public/img/tilt(5).svg" alt="" />
            <div className="relative flex flex-col items-start px-4 py-10 space-y-8 md:px-8 lg:py-10 lg:items-center">
                {/* <div className="self-center w-full h-full"> */}
                <div className="relative justify-self-center self-center w-auto mx-auto space-y-4 lg:grid lg:grid-cols-2 lg:items-center lg:space-x-20 lg:min-h-min">
                    <img src="/public/img/Metrics-bro.svg" className="hidden lg:flex lg:content-center lg:w-full lg:max-w-3xl lg:h-auto lg:row-start-2 lg:row-end-3 lg:col-start-1" alt="" />
                <h2 className="self-start block font-bold text-3xl tracking-tight font-Poppins md:text-5xl lg:col-start-2 lg:row-start-1 lg:mb-12 z-40">How it works</h2>
                    <ul className="relative max-w-3xl space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:flex lg:flex-col lg:max-w-none lg:col-start-2 lg:-right-0"> 
                    
                        <Card className=" bg-gradient-to-l from-gray-800 to-gray-900 space-y-1 px-4 py-8 justify-items-start max-w-prose shadow-md shadow-gray-800 md:py-12 md:px-6 md:flex-1 lg:px-6 lg:pt-6 lg:pb-10 lg:items-start">
                            <h2 className=" text-gray-200 text-xl font-semibold tracking-tight inline-flex items-center font-Poppins lg:text-2xl"> <span className="inline-flex text-gray-800 p-1 text-lg bg-gray-300 rounded-full mr-3"><MapPinIcon className="h-6 inline-block" /></span><span> Choose your location</span></h2>
                            <p className="text-gray-300 font-Montserrat text-md leading-6 md:text-lg">Choose where you want your Mobile Car Wash to arrive. The location you set is where you want the car wash to take place.</p>
                        </Card>

                        <Card className=" bg-gradient-to-l from-gray-800 to-gray-900 space-y-1 px-4 py-8 justify-items-start max-w-prose shadow-md shadow-gray-800 md:py-12 md:px-6 md:flex-1 lg:px-6 lg:pt-6 lg:pb-10 lg:items-start">
                            <h2 className=" text-gray-200 text-xl font-semibold tracking-tight inline-flex items-center font-Poppins lg:text-2xl"> <span className="inline-flex text-gray-800 p-1 text-lg bg-gray-300 rounded-full mr-3"><InformationCircleIcon className="h-6 inline-block" /></span><span> Select your service</span></h2>
                            <p className="text-gray-300 font-Montserrat text-md leading-6 md:text-lg">Select the service you want and choose whether there will be parking space for the mobile car wash. You can also include a message with specific instructions.</p>
                        </Card>
{/* 
                        <Card className=" bg-gradient-to-l from-gray-800 to-gray-900 space-y-1 px-4 py-8 justify-items-start max-w-prose shadow-md shadow-gray-800 md:py-12 md:px-6 md:flex-1 lg:px-6 lg:pt-6 lg:pb-10 lg:items-start">
                            <h2 className=" text-gray-200 text-xl font-semibold tracking-tight inline-flex items-center font-Poppins lg:text-2xl"> <span className="inline-flex text-gray-800 p-1 text-lg bg-gray-300 rounded-full mr-3"><CurrencyPoundIcon className="h-6 inline-block" /></span> Tips are always welcome! </h2>
                            <p className="text-gray-300 font-Montserrat text-md leading-6 md:text-lg">If you want to, you can tip your personal Mobile Car Washer for their service. All Washers receive 100% of their tips!</p>
                        </Card> */}

                        <Card className=" bg-gradient-to-l from-gray-800 to-gray-900 space-y-1 px-4 py-8 justify-items-start max-w-prose shadow-md shadow-gray-800 md:col-span-2 md:max-w-none md:py-12 md:px-6 md:h-min lg:max-w-prose lg:px-6 lg:pt-6 lg:pb-10 lg:items-start">
                            <h2 className=" text-gray-200 text-xl font-semibold tracking-tight inline-flex items-center font-Poppins lg:text-2xl"> <span className="inline-flex text-gray-800 p-1 text-lg bg-gray-300 rounded-full mr-3"><CheckIcon className="h-6 inline-block" /></span><span> Place your order! </span></h2>
                            <p className="text-gray-300 font-Montserrat text-md leading-6 md:text-lg">Submit your order for a mobile car wash and wait for your order to arrive! You will be notified on the day when your Mobile Car Wash is on the.</p>
                        </Card>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default DetailsSection;