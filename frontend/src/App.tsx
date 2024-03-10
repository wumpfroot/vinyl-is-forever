import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout";
import Owned from "./pages/Owned";
import Wishlist from "./pages/Wishlist";
import ErrorPage from "./pages/ErrorPage";
import { Vinyl } from "./types";

function App() {
	const [vinyls, setVinyls] = useState<Vinyl[]>([]);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Owned vinyls={vinyls} setVinyls={setVinyls} search={search} setSearch={setSearch} genre={genre} setGenre={setGenre} />} />
					<Route path="wishlist" element={<Wishlist vinyls={vinyls} setVinyls={setVinyls} search={search} setSearch={setSearch} genre={genre} setGenre={setGenre} />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
