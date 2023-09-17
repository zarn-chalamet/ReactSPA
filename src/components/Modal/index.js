import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";
export default function Modal({ children }) {
  return createPortal(
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}
