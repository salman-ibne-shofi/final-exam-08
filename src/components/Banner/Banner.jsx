const Banner = () => {
	return (
		<div className="flex bg-base-200 border rounded-2xl h-80 items-center justify-around mt-8">
			<div>
				<h2 className="text-6xl font-bold mb-2">
					Books to freshen up your bookshelf
				</h2>
				<button className="btn bg-[#23BE0A] text-white px-6 py-4 font-bold rounded-md mt-6">
					View The List
				</button>
			</div>
			<div>
				<img src="https://i.postimg.cc/R0DYk67c/pngwing-1.png" />
			</div>
		</div>
	);
};

export default Banner;
