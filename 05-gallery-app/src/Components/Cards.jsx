import { useFetchImg } from "../Hooks/useFetchImg";
import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";

const Cards = () => {
	const [images, loading, handleSubmit] = useFetchImg();
	return (
		<div className="text-center">
			<FormImg handleSubmit={handleSubmit} />
			<hr />

			{loading && <Loading />}

			<div className="row">
				{images.map((img) => {
					return (
						<div key={img.id} className="col">
							<Card img={img.urls.regular} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
