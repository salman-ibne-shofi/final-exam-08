import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="flex flex-col md:flex-row bg-base-200  rounded-2xl p-8 md:p-16 items-center justify-around mt-8">
			<div className="text-center md:text-left mb-8 md:mb-0">
				<h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-12">
					Books to freshen up <br /> your bookshelf
				</h2>
				<Link
					className="bg-[#23BE0A] text-white px-4 py-2 md:px-6 md:py-4 font-bold font-sans rounded-md"
					to="/listed"
				>
					View The List
				</Link>
			</div>
			<div>
				<img
					className="w-3/4 md:w-full"
					src="https://i.postimg.cc/J4DGW6Gy/pngwing-1-1.png"
				/>
			</div>
		</div>
	);
};

export default Banner;
