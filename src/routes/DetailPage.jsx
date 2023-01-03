import { Suspense } from "react";
import { Await, useLoaderData, Link } from "react-router-dom";
import Content from "../components/Content";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../components/Navbar";
import { useStateContext } from "../context/ContextProvider";

const DetailPage = () => {
  const { dark } = useStateContext();
  const { data } = useLoaderData();

  return (
    <div className={dark ? "detailpage-dark" : "detailpage"}>
      <Navbar />
      <div>
        <div className={dark ? "backbutton-dark" : "backbutton"}>
          <Link to="/">
            <BiArrowBack />
            Back
          </Link>
        </div>

        <Suspense fallback={<div>Loading</div>}>
          <Await resolve={data}>
            <Content />
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default DetailPage;
