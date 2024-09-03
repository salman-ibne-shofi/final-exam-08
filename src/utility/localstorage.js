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
		return true;
	} else {
		return false;
	}
};

const getReadBook = () => {
	const storedBook = localStorage.getItem("read-book");
	if (storedBook) {
		return JSON.parse(storedBook);
	}
	return [];
};

const saveReadBook = (bookId) => {
	const storedBooks = getReadBook();
	const exists = storedBooks.find((booksId) => booksId === bookId);
	if (!exists) {
		storedBooks.push(bookId);
		localStorage.setItem("read-book", JSON.stringify(storedBooks));
		return true;
	} else {
		return false;
	}
};

export { getStoredBook, saveBook, getReadBook, saveReadBook };
