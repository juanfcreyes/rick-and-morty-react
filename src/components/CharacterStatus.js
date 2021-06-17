export const CharacterStatus = ({ status }) => {
    if (status === "Alive") {
		return <span className="badge bg-success">{status}</span>;
	} else if (status === "Dead") {
		return <span className="badge bg-danger">{status}</span>;
	}
	return <div></div>;
};
