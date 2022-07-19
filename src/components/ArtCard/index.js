import "./style.css";

export const ArtCard = ({ obra }) => {
  return (
    <article className="card">
      <img src={obra.image} alt={obra.title} />
      <h2>
        {" "}
        {obra.title} ({obra.date}) - {obra.author}{" "}
      </h2>
      <p> {obra.description} </p>
    </article>
  );
};
