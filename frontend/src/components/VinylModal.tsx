import { useVinylStore } from "../store";

type Props = {
	handleCloseModal: () => void;
};

const VinylModal = ({ handleCloseModal }: Props) => {
	const vinylInfo = useVinylStore((state) => state.vinylInfo);
	return (
		<div onClick={handleCloseModal} className="fixed top-0 bg-black h-screen w-screen bg-opacity-50 grid place-content-center backdrop-blur-sm">
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col items-center bg-black p-7 rounded shadow-md z-10">
				<h2 className="text-2xl">{vinylInfo?.title}</h2>
				<p className="mb-3">
					By: <span className="font-bold">{vinylInfo?.artist}</span>
				</p>
				<div className="md:flex md:gap-5">
					<img className="w-56 md:w-80 h-auto mx-auto" src={vinylInfo?.coverImg} alt={vinylInfo?.title} />
					<div className="w-96 text-center">{vinylInfo?.description === "" || vinylInfo?.description === undefined ? <p>No description here... yet</p> : <p>{vinylInfo?.description}</p>}</div>
				</div>
				<p>
					Favourite track: <span className="font-bold">{vinylInfo?.favourite_track}</span>
				</p>
				<button className="bg-slate-100 shadow text-black p-3 rounded hover:bg-black hover:text-slate-100" onClick={handleCloseModal}>
					Close
				</button>
			</div>
		</div>
	);
};
export default VinylModal;
