import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
	const navRef = useRef();

	const showHeader = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Orders</a>
				<a href="/#">Help</a>
				<a href="/#">Profile</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showHeader}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showHeader}>
				<FaBars />
			</button>
		</header>
	);
}

export default Header;