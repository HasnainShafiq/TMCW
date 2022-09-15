
function AboutSection(props) {
    return (
        <section className="relative bg-gradient-to-t from-gray-900 to-gray-800">
            <div className="contents max-w-7xl">
                <img src="/img/wavesOpacity.svg" alt="" />
            </div>
            <div className="md:flex md:flex-col md:items-center">
                <div className="relative w-full max-w-7xl flex flex-col items-center content-center justify-center px-4 py-12 space-y-4 md:grid md:grid-cols-4 md:justify-items-center md:py-24 md:space-y-0 lg:gap-4">
                    <div className="relative md:pl-4 md:col-span-2 md:row-start-1 md:row-span-full space-y-4 max-w-prose">
                        <h2 className="font-bold text-3xl tracking-tight font-Poppins md:text-5xl">About TMCW</h2>
                        <p className="font-Montserrat text-gray-200 text-md leading-6 md:text-lg lg:text-xl">TMCW is a service which allows you to schedule a car wash for a time which suits you. It gives you the freedom to choose where and when you want your car washed, and the type of service required. It saves you the headache of queuing and serves to make your life easier, especially if your car is constantly in need of cleaning. </p>
                        <a href="/" className="font-sans text-white text-sm leading-6 md:text-md  underline">Learn more</a>
                    </div>
                    <div className="flex w-3/4 max-w-sm h-auto content-center justify-items-center md:w-full md:max-w-none md:translate-y-8 md:col-start-3 md:col-span-2 lg:translate-y-12">
                        <img src="/img/paper-map.svg" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;