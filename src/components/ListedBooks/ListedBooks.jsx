import { RiArrowDropDownLine } from "react-icons/ri";
import { getReadBook, getStoredBook } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";

const ListedBooks = () => {
	const booksLocal = getStoredBook();
	const [allBooks, setAllBooks] = useState([]);

	useEffect(() => {
		fetch("/public/books.json")
			.then((res) => res.json())
			.then((data) => {
				setAllBooks(data);
			});
	}, []);

	console.log(allBooks);

	return (
		<div>
			<h2 className="bg-base-200 p-8 rounded-2xl flex justify-center font-bold text-4xl font-sans mt-4">
				Books
			</h2>
			<div className="dropdown flex justify-center">
				<div
					tabIndex={0}
					role="button"
					className="btn mt-6 font-sans text-lg text-white bg-[#23BE0A]"
				>
					Sort By
					<span className="text-2xl">
						<RiArrowDropDownLine />
					</span>
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
				>
					<li>
						<a>Rating</a>
					</li>
					<li>
						<a>Number of pages</a>
					</li>
					<li>
						<a>Published year</a>
					</li>
				</ul>
			</div>
			{allBooks
				.filter((book) => booksLocal.includes(book.bookId))
				.map((book) => {
					return (
						<div className="card card-side border mt-8 p-5">
							<div className="p-6 bg-base-200 border rounded-2xl">
								<img src={book.image} />
							</div>
							<div className="card-body">
								<h2 className="card-title">{book.bookName}</h2>
								<p>By : {book.author}</p>
								<p>
									<span className="font-bold">Tag</span>
									{book.tags}
								</p>
								<div className="flex gap-6">
									<div className="flex gap-2">
										<span className="text-xl">
											<LuUsers />
										</span>
										Publisher: {book.publisher}
									</div>
									<div className="flex gap-2">
										<span className="text-xl">
											<RiPagesLine />
										</span>
										Page {book.totalPages}
									</div>
								</div>
								<div className="card-actions">
									<button className="btn bg-[#23BE0A] text-white rounded-full font-sans">
										View Details
									</button>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default ListedBooks;
