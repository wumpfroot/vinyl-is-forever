import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.tsx";
import Owned from "./Owned.tsx";
import Wishlist from "./Wishlist.tsx";
import ErrorPage from "./ErrorPage.tsx";

const WebRoutes = () => {
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
};
export default WebRoutes;
