import React from "react";
import { useAsyncValue, Link } from "react-router-dom";
import "./content.css";

const Content = ({ borders }) => {
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
                <p className="data"> {nameObj.common}</p>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Population:</h4>
            <p className="data">
              {new Intl.NumberFormat().format(data[0].population)}
            </p>
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
              {Object.values(data[0].currencies).map((currency) => (
                <span key={currency.name}>{currency.name}</span>
              ))}
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "10px" }}>
            <h4 className="titles">Languages:</h4>
            <p>
              {Object.values(data[0].languages).map((langObj) => (
                <p className="data"> {langObj} </p>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "50px" }}>
        {data[0].borders ? (
          <>
            <h4>Border Countries:</h4>
            <span>
              {borders
                .filter((countryCode) =>
                  data[0].borders?.includes(countryCode.code)
                )
                .map((countryCode) => {
                  return (
                    <Link
                      className="link"
                      to={"/countries/" + countryCode.name}
                    >
                      {countryCode.name}
                    </Link>
                  );
                })}
            </span>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Content;
