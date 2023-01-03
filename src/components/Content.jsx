import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { useAsyncValue, Link } from "react-router-dom";

const Content = () => {
  const { dark } = useStateContext();
  const { data } = useAsyncValue();

  return (
    <>
      <img className="flag" alt={data[0].name.common} src={data[0].flags.png} />

      <div className="details-columns">
        <div style={{ marginLeft: "auto", marginTop: "30px" }}>
          <h2 style={{ textAlign: "start" }}>{data[0].name.common}</h2>

          <div style={{ display: "flex", marginTop: "30px" }}>
            <div style={{ fontWeight: "800", display: "flex", width: "100%" }}>
              Native Names:
              {Object.values(data[0].name.nativeName).map((nameObj) => (
                <p className="data"> {nameObj.common},</p>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Population:</h4>
            <p className="data">{data[0].population}</p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Region:</h4>
            <p className="data">{data[0].region}</p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Sub Region:</h4>
            <p className="data">{data[0].subregion}</p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Capital:</h4>
            <p className="data">{data[0].capital}</p>
          </div>
        </div>

        <div style={{ marginTop: "93px", marginLeft: "40px" }}>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Top Level Domain:</h4>
            <p className="data">{data[0].tld}</p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Currencies:</h4>
            <p className="data">
              {Object.values(data[0].currencies).map(
                (currencyObj) => currencyObj.name
              )}
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Languages:</h4>
            <p className="data">
              {Object.values(data[0].languages).map((langObj) => langObj)}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "50px" }}>
        <h4 className="titles">Border Countries:</h4>
        <p className="data">
          {data[0].borders.map((item) => (
            <Link
              className={dark ? "link-dark" : "link"}
              to={`/countries/${item}`}
            >
              {[...item]}
            </Link>
          ))}
        </p>
      </div>
    </>
  );
};

export default Content;
