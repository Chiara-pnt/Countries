import { Suspense, useState, useEffect } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Back from "../components/Back/Back";
import Content from "../components/Content/Content";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar/Navbar";
import { useStateContext } from "../context/ContextProvider";
import axios from "axios";

const DetailPage = () => {
  const { dark } = useStateContext();
  const { data } = useLoaderData();
  const [borders, setBorders] = useState([]);

  useEffect(() => {
    const getBorders = async () => {
      try {
        const resp = await axios.get("https://restcountries.com/v3.1/all");
        setBorders(
          resp.data.map((country) => {
            return { name: country.name.common, code: country.cca3 };
          })
        );
      } catch (err) {
        console.error(err);
      }
    };

    getBorders();
  }, []);

  return (
    <div className={dark ? "detailpage-dark" : "detailpage"}>
      <Navbar />
      <div>
        <Back />

        <Suspense fallback={<Loading />}>
          <Await resolve={data}>
            <Content borders={borders} />
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default DetailPage;
