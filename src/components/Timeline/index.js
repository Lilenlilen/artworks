import { ArtCard } from "../ArtCard";
import { List } from "../List";
import "./style.css";

export const Timeline = ({ data }) => {
  return (
    <section className="timeline">
      <List
        data={data.sort((a, b) => {
          return a.date - b.date;
        })}
        render={(obra, index) => {
          return (
            <li key={index}>
              <ArtCard obra={obra} />
            </li>
          );
        }}
      />
    </section>
  );
};
