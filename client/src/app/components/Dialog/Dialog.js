import React from "react";
import { Link } from "react-router-dom";
import "./dialog.css";
import logos from "../../assets/images/logos";
import icons from "../../assets/images/icons";

const Dialog = props => {
  const { action, open, position } = props;

  return (
    <div
      style={{ position: `${position}` }}
      className={`dialog box-shadow ${open ? "dialog--open" : ""}`}
    >
      <div className="padding-20">
        <div className="space-between middle">
          <Link to="/">
            <img
              className="logo--small"
              src={logos.mts_logo_full}
              alt="MTS Logo Full"
            />
          </Link>
          <div className="row">
            <a className="button-padding" href="tel:0393146957">
              <img
                className="icon--small"
                src={icons.phone_grey_svg}
                alt="MTS Phone"
              />
            </a>
            <img
              onClick={e => action(e)}
              className="icon--small button-padding"
              src={icons.close_grey_svg}
              alt="MTS Close"
            />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

Dialog.defaultProps = {
  open: false,
  position: "fixed"
};

export default Dialog;
