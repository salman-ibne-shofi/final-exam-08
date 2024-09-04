import { useLoaderData } from "react-router-dom";
import {
	BarChart as BChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";
import { getReadBook } from "../../utility/localstorage";

const BarChart = () => {
	const booksReadIds = getReadBook();
	const allBooks = useLoaderData();
	const booksRead = allBooks.filter((book) =>
		booksReadIds.includes(book.bookId)
	);

	const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

	const data = booksRead;

	console.log(data);

	const getPath = (x, y, width, height) => {
		return `M${x},${y + height}C${x + width / 3},${y + height} ${
			x + width / 2
		},${y + height / 3}
	    ${x + width / 2}, ${y}
	    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
			x + width
		}, ${y + height}
	    Z`;
	};

	const TriangleBar = (props) => {
		const { fill, x, y, width, height } = props;

		return (
			<path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
		);
	};

	return (
		<div className="flex justify-center mt-12 p-12 bg-base-200 rounded-3xl font-sans">
			<BChart
				width={600}
				height={500}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="bookName" />
				<YAxis />
				<Bar
					dataKey="totalPages"
					fill="#8884d8"
					shape={<TriangleBar />}
					label={{ position: "top" }}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % 20]} />
					))}
				</Bar>
			</BChart>
		</div>
	);
};

export default BarChart;
