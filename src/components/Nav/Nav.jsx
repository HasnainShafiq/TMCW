import Button from "../UI/Button"

function Nav(props) {
    return (
        <nav className="bg-sky-700">
            <div className="max-w-7xl flex mx-auto justify-between items-center py-4 px-4">

                <div>
                    <h1 className="text-white font-semibold font-Poppins text-2xl tracking-tight">TMCW</h1>
                </div>
                <div className="flex gap-x-1">
                    <Button type="button" className="py-2 px-3 rounded-2xl text-white font-semibold text-sm font-Poppins hover:bg-gray-500 hover:text-white">Log in</Button>
                    <Button type="button" className="py-2 px-3 rounded-2xl bg-white text-sky-800 font-semibold text-sm font-Poppins hover:bg-gray-300">Sign up</Button>
                </div>
            </div>
        </nav>
    )
}

export default Nav