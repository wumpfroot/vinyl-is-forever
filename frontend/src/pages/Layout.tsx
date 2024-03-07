import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav className="flex justify-between mx-5">
				<h1 className="text-5xl">Vinyl is Forever</h1>
				<ul className="flex gap-5 items-center">
					<li>
						<Link to={"/"}>Owned</Link>
					</li>
					<li>
						<Link to={"/wishlist"}>Wishlist</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</>
	);
};
export default Layout;
