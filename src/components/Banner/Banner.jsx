import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className="flex bg-base-200  rounded-2xl p-16 items-center justify-around mt-8">
			<div>
				<h2 className="text-7xl font-bold mb-12">
					Books to freshen up <br /> your bookshelf
				</h2>
				<Link
					className="bg-[#23BE0A] text-white px-6 py-4 font-bold font-sans rounded-md"
					to="/listed"
				>
					View The List
				</Link>
			</div>
			<div>
				<img src="https://i.postimg.cc/J4DGW6Gy/pngwing-1-1.png" />
			</div>
		</div>
	);
};

export default Banner;
