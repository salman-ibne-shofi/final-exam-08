import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	getReadBook,
	saveBook,
	saveReadBook,
} from "../../utility/localstorage";

const BookDetails = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const book = books.find((book) => book.bookId === bookId);
	// console.log(book);

	const handleRead = () => {
		if (saveReadBook(bookId)) {
			toast("You read the book!!");
		} else {
			toast("Oops!! You already read this book!");
		}
	};

	const handleWishlist = () => {
		const books = getReadBook();

		if (!books.includes(bookId) && saveBook(bookId)) {
			toast("Added to the wishlist");
			saveBook(bookId);
		} else {
			toast("Oops!! Book already read or added to wishlist");
		}
	};

	return (
		<div className="card card-side flex flex-col md:flex-row items-center">
			<div className="bg-base-200 p-8 md:p-16 rounded-2xl">
				<img
					src={book.image}
					style={{ width: "280px", height: "355px" }}
				/>
			</div>
			<div className="card-body w-full md:w-3/4 p-4 md:p-20">
				<h2 className="card-title text-3xl md:text-5xl">
					{book.bookName}
				</h2>
				<div className="font-sans mt-4 md:mt-0">
					<div className="font-medium">By : {book.author}</div>
					<div className="border my-2 md:my-3" />
					<div className="font-medium">{book.category}</div>
					<div className="border my-2 md:my-3" />
					<div>
						<span className="font-bold">Review : </span>
						{book.review}
					</div>
					<div className="flex flex-wrap gap-2 mt-2 md:mt-4">
						<span className="font-bold">Tag</span>
						<span className="text-[#23BE0A] flex flex-wrap gap-4 md:gap-12">
							{book.tags.map((tag) => (
								<span>{tag}</span>
							))}
						</span>
					</div>
					<div className="border mt-2 md:mt-3" />
					<table className="table">
						<tbody>
							<tr>
								<tr>
									<td>Number of Pages:</td>
									<td className="font-semibold">
										{book.totalPages}
									</td>
								</tr>
								<tr>
									<td>Publisher:</td>
									<td className="font-semibold">
										{book.publisher}
									</td>
								</tr>
								<tr>
									<td>Year of Publishing:</td>
									<td className="font-semibold">
										{book.yearOfPublishing}
									</td>
								</tr>
								<tr>
									<td>Rating:</td>
									<td className="font-semibold">
										{book.rating}
									</td>
								</tr>
							</tr>
						</tbody>
					</table>
					<div className="card-actions mt-4 flex flex-col md:flex-row gap-2">
						<Link>
							<button
								onClick={handleRead}
								className="btn my-button mr-4 font-semibold"
							>
								Read
							</button>
							<button
								onClick={handleWishlist}
								className="btn bg-[#50B1C9] text-white font-semibold"
							>
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
