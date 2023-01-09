import { useRouteError } from "react-router-dom";
import Back from "../components/Back/Back";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Back />
      <div className="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
