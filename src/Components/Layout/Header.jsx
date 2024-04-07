import { NavLink } from "react-router-dom"
import ArrowLeft from "../Svg/ArrowLeft"
import ArrowRight from "../Svg/ArrowRight"

const Header = ({

}) => {

    const ctaStyle = "block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
    const ctaActiveStyle = "block rounded-lg bg-red-300 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-200 focus:outline-none focus:ring"

    return <>
        <header>
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, Navid!</h1>

                        <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <NavLink
                            to="/"
                            className={(navData) => navData.isActive ? `${ctaActiveStyle}` : `${ctaStyle}`}
                        >
                            <span className="text-sm font-medium"> Home </span>
                        </NavLink>

                        <NavLink
                            to="/tasks"
                            className={navData => navData.isActive ? `${ctaActiveStyle}` : `${ctaStyle}`}
                        >
                            Tasks
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header
