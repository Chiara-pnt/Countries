import React from "react";
import { useAsyncValue, Link } from "react-router-dom";
import "./content.css";
import { useStateContext } from "../../context/ContextProvider";

const Content = ({ borders }) => {
  const { data } = useAsyncValue();
  const { dark } = useStateContext();

  return (
    <div className="container">
      <img className="flag" alt={data[0].name.common} src={data[0].flags.png} />

      <div className="details-columns">
        <div className="col-1">
          <span className="countryName">{data[0].name.common}</span>

          <div style={{ display: "flex", marginTop: "30px" }}>
            <div style={{ fontWeight: "800", display: "flex", width: "100%" }}>
              Native Names:
              {Object.values(data[0].name.nativeName).map((nameObj) => (
                <p className="data"> {nameObj.common}</p>
              ))}
            </div>
          </div>

          <div className="info-box">
            <h4 className="titles">Population:</h4>
            <p className="data">
              {new Intl.NumberFormat().format(data[0].population)}
            </p>
          </div>
          <div className="info-box">
            <h4 className="titles">Region:</h4>
            <p className="data">{data[0].region}</p>
          </div>
          <div className="info-box">
            <h4 className="titles">Sub Region:</h4>
            <p className="data">{data[0].subregion}</p>
          </div>
          <div className="info-box">
            <h4 className="titles">Capital:</h4>
            <p className="data">{data[0].capital}</p>
          </div>
        </div>

        <div className="col-2">
          <div className="info-box">
            <h4 className="titles">Top Level Domain:</h4>
            <p className="data">{data[0].tld}</p>
          </div>
          <div className="info-box">
            <h4 className="titles">Currencies:</h4>
            <p className="data">
              {Object.values(data[0].currencies).map((currency) => (
                <p>{currency.name}</p>
              ))}
            </p>
          </div>
          <div className="info-box">
            <h4 className="titles">Languages:</h4>
            <p>
              {Object.values(data[0].languages).map((langObj) => (
                <p className="data"> {langObj} </p>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="borders">
        {data[0].borders ? (
          <>
            <h4>Border Countries:</h4>
            <ul className="b-links">
              {borders
                .filter((countryCode) =>
                  data[0].borders?.includes(countryCode.code)
                )
                .map((countryCode) => {
                  return (
                    <li className={dark ? "link-dark" : "link"}>
                      <Link to={"/countries/" + countryCode.name}>
                        {countryCode.name}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Content;
