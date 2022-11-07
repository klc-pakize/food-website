import { data } from "../../helper/data";
import "./Food.css";
import { useNavigate } from "react-router-dom";

const Food = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      {data.map((item) => {
        const { title, desc, image, id } = item;
        return (
          <div
            key={id}
            className="card"
            onClick={() => navigate(`${id}`, { state: item })}
          >
            <h2>{title}</h2>
            <img src={image} alt={id} />
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
