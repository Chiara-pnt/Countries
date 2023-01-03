import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Card = ({ countries, query }) => {
  const { dark } = useStateContext();
  const filteredList = useMemo(
    () =>
      countries.filter((element) =>
        element.name.common.toLowerCase().includes(query.toLowerCase())
      ),
    [query, countries]
  );

  const card = filteredList.map((item) => (
    <Link to={`/countries/${item.name.common}`}>
      <div className={dark ? "card-dark" : "card"}>
        <div style={{ width: "100%" }}>
          <img alt={item.cca2} src={item.flags.png} />
        </div>

        <div style={{ textAlign: "center", marginTop: "11%" }}>
          <h3>{item.name.common}</h3>

          <div className="card-data">
            <div className="card-info">
              Population:
              <p style={{ marginLeft: "5px", fontWeight: "300" }}>
                {item.population}
              </p>
            </div>

            <div className="card-info">
              Region:
              <p style={{ marginLeft: "5px", fontWeight: "300" }}>
                {item.region}
              </p>
            </div>

            <div className="card-info">
              Capital:
              <p style={{ marginLeft: "5px", fontWeight: "300" }}>
                {item.capital}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  ));

  return <div className="cards">{card}</div>;
};

export default Card;
