import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const FoodDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const { state: item } = useLocation();
  console.log(item);
  return (
    <div
      style={{
        backgroundColor: "#030009c9",
        width: "55%",
        margin: "auto",
        borderRadius: "25px",
        marginBottom: "2rem",
      }}
    >
      <h2
        style={{
          color: "#cfa670",
          padding: " 1rem 2rem",
        }}
      >
        {item.title};
      </h2>
      <div
        style={{
          position: "relative",
        }}
        key={item.id}
      >
        <img
          style={{ width: "400px", padding: "2rem", marginLeft: "20rem" }}
          src={item.image}
          alt={item.id}
        />
        <table
          style={{
            color: "#cfa670",
            fontSize: "15px",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  color: "#cfa670",
                  padding: "2rem",

                  alignItems: "flex-start",
                }}
              >
                <th>MALZEMELER</th>
                {item.malzeme.map((item) => {
                  return (
                    <p style={{ color: "#cfa670" }}>{item.toUpperCase()}</p>
                  );
                })}
              </td>
              <td>
                <th>ÖLÇÜLER</th>
                {item.gramaj.map((item) => {
                  return (
                    <p style={{ color: "#cfa670" }}>{item.toUpperCase()}</p>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            color: "#cfa670",
            padding: "1rem",
            alignItems: "flex-start",
            position: "absolute",
            width: "50%",
            left: "40%",
            top: "30rem",
            lineHeight: "1.5",
          }}
        >
          HAZIRLANIŞI: {item.hazirlik}
        </p>
        <button
          style={{
            color: "#030009c9",
            padding: ".5rem",
            position: "absolute",
            width: "100px",
            borderRadius: "25px",
            right: "2rem",
            bottom: "2rem",
            backgroundColor: "#cfa670",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          Geri Dön
        </button>
      </div>
    </div>
  );
};

export default FoodDetail;
