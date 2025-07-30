import worldIcon from "../assets/Globe.svg";
import "../Styles/Header.css";

function Header() {
	return (
		<header>
			<img src={worldIcon} alt="World icon" width="100%" height="100%" />
			<p>my travel journal.</p>
		</header>
	);
}

export default Header;
