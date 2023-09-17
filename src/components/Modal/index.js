import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
export default function Modal({ children, danger }) {
  let newClass = danger ? "border-red" : "border-green";
  return createPortal(
    <div className="modal-component">
      <div className="modal-backdrop">
        <div className="modal">{children}</div>
      </div>
      <div className="modal-backdrop">
        <div
          // classs adding lote ml so class ko yoe yoe string nak yay ma ya tot buu
          className={`modal ${newClass}`}
          // if you don't want to use inline css, you can add class
          // style={{
          //   border: "4px solid",
          //   borderColor: danger ? "red" : "green",
          // }}
        >
          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
