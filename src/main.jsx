import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import BookDetails from "./components/BookDetails/BookDetails";
import BarChart from "./components/BarChart/BarChart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/listed",
				element: <ListedBooks></ListedBooks>,
				loader: () => fetch("/public/books.json"),
			},
			{
				path: "/book/:bookId",
				element: <BookDetails></BookDetails>,
				loader: () => fetch("/public/books.json"),
			},
			{
				path: "/book/:bookId",
				element: <ListedBooks></ListedBooks>,
				loader: () => fetch("/public/books.json"),
			},
			{
				path: "/pages",
				element: <BarChart></BarChart>,
				loader: () => fetch("/books.json"),
			},
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
