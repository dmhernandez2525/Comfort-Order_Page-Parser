import React from "react";
import { modalHOC } from "../apollo_hooks_hoc";
import { withRouter } from "react-router-dom";
import Cart from "./cart";

function Modal({
  modal,
  modalBool,
  setModalCache,
  setParentModalBool,
  match,
  history,
}) {
  if (!modalBool) {
    return null;
  }
  let component;
  switch (modal) {
    case "cart":
      component = <Cart />;
      break;
    default:
      return null;
  }

  const modalFunc = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setModalCache(false, setParentModalBool);
  };
  return (
    <div className="modal-background" onClick={(e) => modalFunc(e)}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default withRouter(modalHOC(Modal));
