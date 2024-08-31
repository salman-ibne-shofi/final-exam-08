import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
	const books = useLoaderData();
	const { bookId } = useParams();
	const book = books.find((book) => book.bookId === bookId);
	console.log(book);

	return (
		<div className="card card-side">
			<div>
				<img
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					alt="Movie"
				/>
			</div>
			<div className="card-body">
				<h2 className="card-title">New movie is released!</h2>
				<p>Click the button to watch on Jetflix app.</p>
				<div>
					<button className="btn btn-primary">Watch</button>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
