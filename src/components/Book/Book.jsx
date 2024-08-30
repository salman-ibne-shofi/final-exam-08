import { HiOutlineStar } from "react-icons/hi2";

const Book = ({ book }) => {
	const { image, bookName, author, category, rating } = book;
	return (
		<div className="card border mt-8">
			<div className="bg-[#F3F3F3] flex justify-center p-12 mt-4 mx-4 rounded-2xl">
				<img src={image} />
			</div>
			<div className="card-body">
				<div className="flex gap-12 ml-4 text-[#23BE0A]">
					{book.tags.map((tag) => (
						<span>{tag}</span>
					))}
				</div>
				<h2 className="card-title text-2xl mt-2">{bookName}</h2>
				<p>By: {author}</p>
				<div className="border-t-2 border-dashed mt-2"></div>
				<div className="flex justify-between mt-2">
					<div>{category}</div>
					<div className="flex">
						<div>{rating}</div>
						<div className="text-xl ml-2">
							<HiOutlineStar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
