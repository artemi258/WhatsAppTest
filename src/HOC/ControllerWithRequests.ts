import { useContext } from "react";
import Context from "../context/Context";

function ControllerWithRequests(controller: any) {
  const context = useContext(Context);

  return class Wrapper extends controller {
    constructor() {
      super(context);
    }
  };
}

export default ControllerWithRequests;
