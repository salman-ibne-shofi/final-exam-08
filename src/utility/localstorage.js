const getStoredBook = () => {
	const storedBook = localStorage.getItem("stored-book");
	if (storedBook) {
		return JSON.parse(storedBook);
	}
	return [];
};

const saveBook = (bookId) => {
	const storedBooks = getStoredBook();
	const exists = storedBooks.find((booksId) => booksId === bookId);
	if (!exists) {
		storedBooks.push(bookId);
		localStorage.setItem("stored-book", JSON.stringify(storedBooks));
	}
};

export { getStoredBook, saveBook };
