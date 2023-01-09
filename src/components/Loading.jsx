import { Oval } from "react-loader-spinner";
import { useStateContext } from "../context/ContextProvider";

const Loading = () => {
  const { dark } = useStateContext();
  return (
    <Oval
      height={80}
      width={80}
      color={dark ? "white" : "black"}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;
