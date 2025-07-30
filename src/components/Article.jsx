import "../Styles/Article.css";
import locationIcon from "../assets/Fill 220.svg";

function Article({ img, title, country, googleMapsLink, dates, text }) {
	return (
		<article className="card">
			<div className="img-container">
				<img src={img.src} alt="" />
			</div>
			<div className="info">
				<div className="location">
					<div className="country">
						<img src={locationIcon} alt="Location Icon" />
						<span>{country}</span>
					</div>
					<a href={googleMapsLink}>View On Google Maps</a>
				</div>
				<div className="content">
					<h2>{title}</h2>
					<time>{dates}</time>
					<p>{text}</p>
				</div>
			</div>
		</article>
	);
}

export default Article;
