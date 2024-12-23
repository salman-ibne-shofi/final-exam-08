import { NavLink } from "react-router-dom";

const Navbar = () => {
	const links = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/listed">Listed Books</NavLink>
			</li>
			<li>
				<NavLink to="/pages">Pages to Read</NavLink>
			</li>
			<li>
				<NavLink to="/about">About Us</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact</NavLink>
			</li>
		</>
	);

	return (
		<div className="navbar mt-4 font-sans">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
					>
						{links}
					</ul>
				</div>
				<a className="font-bold text-2xl0 lg:text-3xl">Book Vibe</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal gap-4">{links}</ul>
			</div>
			{/* <div className="navbar-end flex gap-2 lg:gap-4 ">
				<a className="btn bg-[#23BE0A] text-white font-semibold">
					Sign In
				</a>
				<a className="btn bg-[#59C6D2] text-white font-semibold">
					Sign Up
				</a>
			</div> */}
		</div>
	);
};

export default Navbar;
