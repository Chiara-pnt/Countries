import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  defer,
} from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Error from "./routes/Error";
import DetailPage from "./routes/DetailPage";
import axios from "axios";

import { ContextProvider } from "./context/ContextProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route
        path="countries/:countryName"
        element={<DetailPage />}
        loader={async ({ params }) => {
          const data = axios.get(
            `https://restcountries.com/v3.1/name/${params.countryName}`
          );
          console.log(data);
          return defer({ data });
        }}
        errorElement={<Error />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
