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
		fetch("/books.json")
			.then((res) => res.json())
			.then((data) => {
				setAllBooks(data);
			});
	}, []);

	console.log(allBooks);

	return (
		<div>
			<h2 className="bg-base-200 p-4 md:p-8 rounded-2xl flex justify-center font-bold text-3xl md:text-4xl font-sans mt-4 mb-4 md:mb-8">
				Books
			</h2>
			<div className="dropdown flex justify-center mb-8 md:mb-0">
				<div
					tabIndex={0}
					role="button"
					className="btn px-6 md:px-8 font-sans text-md md:text-lg text-white bg-[#23BE0A] relative md:absolute"
				>
					Sort By
					<span className="text-2xl">
						<RiArrowDropDownLine />
					</span>
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content flex flex-col items-center menu bg-base-100 rounded-box shadow font-sans absolute top-14 md:top-20"
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
					className="tab-content border-base-300 rounded-box p-4 md:p-6"
				>
					{allBooks
						.filter((book) => booksRead.includes(book.bookId))
						.map((book) => {
							return (
								<div className="card card-side flex flex-col md:flex-row mt-8 p-4 md:p-5">
									<div className="flex items-center justify-center w-full md:w-1/5 bg-base-200 border rounded-2xl mb-4 md:mb-0">
										<img src={book.image}  className="w-36 h-48 md:w-40 md:h-52"/>
									</div>
									<div className="card-body font-sans w-full md:w-4/5">
										<h2 className="card-title font-serif text-xl md:text-2xl">
											{book.bookName}
										</h2>
										<p className="my-2">
											By : {book.author}
										</p>
										<div className="flex flex-col md:flex-row gap-2 md:gap-6">
											<div className="font-bold flex flex-wrap gap-1 md:gap-2 my-2">
												Tag
												<span className="text-[#23BE0A] flex flex-wrap gap-2 md:gap-4">
													{book.tags.map((tag) => (
														<span>{tag}</span>
													))}
												</span>
											</div>
											<div className="flex gap-1 my-2">
												<span className="text-lg md:text-xl">
													<IoLocationOutline />
												</span>
												<span>
													Year of Publishing:
													{book.yearOfPublishing}
												</span>
											</div>
										</div>
										<div className="flex flex-col md:flex-row gap-2 md:gap-6">
											<div className="flex gap-1 md:gap-2">
												<span className="text-lg md:text-xl">
													<LuUsers />
												</span>
												Publisher: {book.publisher}
											</div>
											<div className="flex gap-1 md:gap-2">
												<span className="text-lg md:text-xl">
													<RiPagesLine />
												</span>
												Page {book.totalPages}
											</div>
										</div>
										<div className="border my-2 md:my-4"></div>
										<div className="flex flex-col md:flex-row gap-2 md:gap-4 font-sans">
											<div className="flex flex-wrap gap-2 md:gap-4">
												<span className="p-2 md:p-3 text-[#328EFF] bg-[#328EFF15] rounded-full">
													Category: {book.category}
												</span>
												<span className="p-2 md:p-3 text-[#FFAC33] bg-[#FFAC3315] rounded-full">
													Rating: {book.rating}
												</span>
											</div>
											<Link to={`/book/${book.bookId}`}  className="mt-2 md:mt-0">
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
					className="tab-content bg-base-100 border-base-300 rounded-box p-4 md:p-6"
				>
					{allBooks
						.filter((book) => booksLocal.includes(book.bookId))
						.map((book) => {
							return (
								<div className="card card-side flex flex-col md:flex-row mt-8 p-4 md:p-6">
									<div className="flex items-center justify-center w-full md:w-1/5 bg-base-200 border rounded-2xl mb-4 md:mb-0">
										<img src={book.image} className="w-36 h-48 md:w-40 md:h-52" />
									</div>
									<div className="card-body font-sans w-full md:w-4/5">
										<h2 className="card-title font-serif text-xl md:text-2xl">
											{book.bookName}
										</h2>
										<p className="my-2">
											By : {book.author}
										</p>
										<div className="flex flex-col md:flex-row gap-2 md:gap-6">
											<div className="font-bold flex flex-wrap gap-1 md:gap-2 my-2">
												Tag
												<span className="text-[#23BE0A] flex flex-wrap gap-2 md:gap-4">
													{book.tags.map((tag) => (
														<span>{tag}</span>
													))}
												</span>
											</div>
											<div className="flex gap-1 my-2">
												<span className="text-lg md:text-xl">
													<IoLocationOutline />
												</span>
												<span>
													Year of Publishing:
													{book.yearOfPublishing}
												</span>
											</div>
										</div>
										<div className="flex flex-col md:flex-row gap-2 md:gap-6">
											<div className="flex gap-1 md:gap-2">
												<span className="text-lg md:text-xl">
													<LuUsers />
												</span>
												Publisher: {book.publisher}
											</div>
											<div className="flex gap-1 md:gap-2">
												<span className="text-lg md:text-xl">
													<RiPagesLine />
												</span>
												Page {book.totalPages}
											</div>
										</div>
										<div className="border my-2 md:my-4"></div>
										<div className="flex flex-col md:flex-row gap-2 md:gap-4 font-sans">
											<div className="flex flex-wrap gap-2 md:gap-4">
												<span className="p-2 md:p-3 text-[#328EFF] bg-[#328EFF15] rounded-full">
													Category: {book.category}
												</span>
												<span className="p-2 md:p-3 text-[#FFAC33] bg-[#FFAC3315] rounded-full">
													Rating: {book.rating}
												</span>
											</div>
											<Link to={`/book/${book.bookId}`} className="mt-2 md:mt-0">
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
