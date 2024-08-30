import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<div>
			<div>
				<h2 className="text-5xl text-center font-bold mt-16">Books</h2>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{books.map((book) => (
					<Book key={book.bookId} book={book}></Book>
				))}
			</div>
		</div>
	);
};

export default BookList;
