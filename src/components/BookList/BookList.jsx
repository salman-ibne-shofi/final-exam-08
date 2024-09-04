import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BookList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch("/public/books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	return (
		<div>
			<div>
				<h2 className="text-3xl md:text-5xl text-center font-bold mt-8 md:mt-16">
					Books Section
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-8">
				{books.map((book) => (
					<Book key={book.bookId} book={book}></Book>
				))}
			</div>
		</div>
	);
};

export default BookList;
