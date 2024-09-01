import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const book = books.find((book) => book.bookId === bookId);
	console.log(book);

	const handleRead = () => {
		toast("You read the book!!");
	};
	
    const handleWishlist = () => {
		toast("Will read soon");
	};

	return (
		<div className="card card-side flex items-center">
			<div className="bg-base-200 p-16 rounded-2xl">
				<img
					src={book.image}
					style={{ width: "280px", height: "300px" }}
				/>
			</div>
			<div className="card-body w-3/4 p-12">
				<h2 className="card-title text-5xl">{book.bookName}</h2>
				<div className="font-sans">
					<div className="font-medium">By : {book.author}</div>
					<div className="border my-3" />
					<div className="font-medium">{book.category}</div>
					<div className="border my-3" />
					<div>
						<span className="font-bold">Review :</span>{" "}
						{book.review}
					</div>
					<div className="flex gap-2">
						<span className="font-bold">Tag</span>
						<span className="text-[#23BE0A] flex gap-12">
							{book.tags.map((tag) => (
								<span>{tag}</span>
							))}
						</span>
					</div>
					<div className="border my-3" />
					<div>
						Number of Pages:
						<span className="font-semibold ml-1">
							{book.totalPages}
						</span>
					</div>
					<div>
						Publisher:
						<span className="font-semibold ml-1">
							{book.publisher}
						</span>
					</div>
					<div>
						Year of Publishing:
						<span className="font-semibold ml-1">
							{book.yearOfPublishing}
						</span>
					</div>
					<div>
						Rating:
						<span className="font-semibold ml-1">
							{book.rating}
						</span>
					</div>
					<div className="card-actions mt-4">
						<Link>
							<button
								onClick={handleRead}
								className="btn my-button mr-4 font-semibold"
							>
								Read
							</button>
							<button onClick={handleWishlist} className="btn bg-[#50B1C9] text-white font-semibold">
								Wishlist
							</button>
						</Link>
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default BookDetails;
