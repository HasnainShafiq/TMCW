import Button from "../UI/Button"

function HeroText(props) {

    return (
        <section className="bg-sky-700 w-screen">
            <div className="flex items-center relative min-h-[365px] max-w-7xl mx-auto overflow-hidden md:h-[650px] lg:min-h-max lg:overflow-visible">
                {/*  <div className="flex justify-items-center items-center min-h-[350px] mx-auto overflow-x-hidden md:py-20 md:grid md:grid-cols-3 md:h-screen lg:h-screen md:space-x-12">  */}
                <div className="flex flex-col relative items-center max-w-5xl px-2 space-y-4 py-10 md:flex-row md:items-center md:px-6">
                    <div className="relative flex flex-col px-2 space-y-4 md:max-w-prose lg:px-0 lg:max-w-2xl lg:space-y-8">
                        <h1 className="font-bold text-5xl tracking-tight font-Poppins md:text-6xl lg:text-7xl">Your next car wash is only a few clicks away!</h1>
                        <p className="font-Montserrat text-md leading-6 text-gray-300 md:text-xl lg:text-2xl">Tired of queuing for your car to be washed? Look no further! TMCW is a service which brings the car wash to you.</p>
                        <Button type="button" className="hidden md:flex p-3 w-2/4 bg-gray-200 text-sky-800 font-semibold rounded-sm hover:bg-gray-300 md:text-lg lg:text-xl">Get started</Button>
                    </div>

                    <div className="relative w-full self-start px-2 md:col-start-1 md:hidden">
                        <Button type="button" className="p-3 w-full bg-gray-200 text-sky-800 font-semibold rounded-sm hover:bg-gray-300 md:hidden">Get started</Button>
                    </div>
                </div>
                {/* <img src="../src/img/car-wash.svg" className="hidden overflow-hidden md:block absolute col-start-2 col-span-2 row-start-1 row-span-full z-0 left-2/4 translate-x-20 md:portrait:-translate-y-12 md:landscape:-translate-y-12 md:bg-transparent bg-white h-[700px] w-auto lg:translate-x-0"></img> */}
                <img src="/public/img/car-wash.svg" className="hidden md:flex content-center absolute h-[650px] w-auto left-2/4 translate-x-32 md:-translate-y-8 lg:translate-x-22 xl:translate-x-16"></img>
            </div>
        </section>
    )
}

export default HeroText