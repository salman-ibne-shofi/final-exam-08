const Book = ({ book }) => {
	const { image } = book;
	return (
		<div>
			<img src={image} alt="" />
		</div>
	);
};

export default Book;
