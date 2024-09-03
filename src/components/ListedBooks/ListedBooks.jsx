import { RiArrowDropDownLine } from "react-icons/ri";
import { getReadBook, getStoredBook } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ListedBooks = ({ book }) => {
	const booksLocal = getStoredBook();
	const booksRead = getReadBook();

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
					className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-sans"
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
			<div role="tablist" className="tabs tabs-lifted font-sans">
				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Read Books"
				/>
				<div
					role="tabpanel"
					className="tab-content border-base-300 rounded-box p-6"
				>
					{allBooks
						.filter((book) => booksRead.includes(book.bookId))
						.map((book) => {
							return (
								<div className="card card-side mt-8 p-5">
									<div className="flex items-center justify-center w-1/5 bg-base-200 border rounded-2xl">
										<img src={book.image} />
									</div>
									<div className="card-body font-sans">
										<h2 className="card-title font-serif text-2xl">
											{book.bookName}
										</h2>
										<p className="my-2">
											By : {book.author}
										</p>
										<div className="flex gap-6">
											<div className="font-bold flex gap-2 my-2">
												Tag
												<span className="text-[#23BE0A] flex gap-4">
													{book.tags.map((tag) => (
														<span>{tag}</span>
													))}
												</span>
											</div>
											<div className="flex gap-1 my-2">
												<span className="text-xl">
													<IoLocationOutline />
												</span>
												<span>
													Year of Publishing:
													{book.yearOfPublishing}
												</span>
											</div>
										</div>
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
										<div className="border my-4"></div>
										<div className="flex gap-4 font-sans">
											<div className="flex gap-4">
												<span className="p-3 text-[#328EFF] bg-[#328EFF15] rounded-full">
													Category: {book.category}
												</span>
												<span className="p-3 text-[#FFAC33] bg-[#FFAC3315] rounded-full">
													Rating: {book.rating}
												</span>
											</div>
											<Link to={`/book/${book.bookId}`}>
												<button className="btn bg-[#23BE0A] text-white rounded-full font-sans font-medium">
													View Details
												</button>
											</Link>
										</div>
									</div>
								</div>
							);
						})}
				</div>

				<input
					type="radio"
					name="my_tabs_2"
					role="tab"
					className="tab"
					aria-label="Wishlist Books"
					defaultChecked
				/>
				<div
					role="tabpanel"
					className="tab-content bg-base-100 border-base-300 rounded-box p-6"
				>
					{allBooks
						.filter((book) => booksLocal.includes(book.bookId))
						.map((book) => {
							return (
								<div className="card card-side mt-8 p-6">
									<div className="flex items-center justify-center w-1/5 bg-base-200 border rounded-2xl">
										<img src={book.image} />
									</div>
									<div className="card-body font-sans">
										<h2 className="card-title font-serif text-2xl">
											{book.bookName}
										</h2>
										<p className="my-2">
											By : {book.author}
										</p>
										<div className="flex gap-6">
											<div className="font-bold flex gap-2 my-2">
												Tag
												<span className="text-[#23BE0A] flex gap-4">
													{book.tags.map((tag) => (
														<span>{tag}</span>
													))}
												</span>
											</div>
											<div className="flex gap-1 my-2">
												<span className="text-xl">
													<IoLocationOutline />
												</span>
												<span>
													Year of Publishing:
													{book.yearOfPublishing}
												</span>
											</div>
										</div>
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
										<div className="border my-4"></div>
										<div className="flex gap-4 font-sans">
											<div className="flex gap-4">
												<span className="p-3 text-[#328EFF] bg-[#328EFF15] rounded-full">
													Category: {book.category}
												</span>
												<span className="p-3 text-[#FFAC33] bg-[#FFAC3315] rounded-full">
													Rating: {book.rating}
												</span>
											</div>
											<Link to={`/book/${book.bookId}`}>
												<button className="btn bg-[#23BE0A] text-white rounded-full font-sans font-medium">
													View Details
												</button>
											</Link>
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ListedBooks;