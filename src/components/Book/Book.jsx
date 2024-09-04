import { HiOutlineStar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
	const { bookId, image, bookName, author, category, rating } = book;
	return (
		<Link to={`/book/${bookId}`}>
			<div className="card border mt-8">
				<div className="bg-[#F3F3F3] flex justify-center p-8 md:p-12 mt-4 mx-2 md:mx-4 rounded-2xl">
					<img src={image} />
				</div>
				<div className="card-body p-4 md:p-6">
					<div className="flex flex-wrap gap-4 md:gap-12 ml-0 md:ml-4 text-[#23BE0A] font-semibold">
						{book.tags.map((tag) => (
							<span>{tag}</span>
						))}
					</div>
					<h2 className="card-title text-xl md:text-2xl mt-2">
						{bookName}
					</h2>
					<p className="font-semibold font-sans">By: {author}</p>
					<div className="border-t-2 border-dashed mt-2"></div>
					<div className="flex flex-col md:flex-row justify-between mt-2">
						<div className="font-semibold font-sans">
							{category}
						</div>
						<div className="flex items-center mt-2 md:mt-0">
							<div className="font-medium font-sans">
								{rating}
							</div>
							<div className="text-2xl ml-2">
								<HiOutlineStar />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Book;
