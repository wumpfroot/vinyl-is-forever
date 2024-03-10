import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Owned from "./pages/Owned";
import Wishlist from "./pages/Wishlist";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Owned />} />
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
