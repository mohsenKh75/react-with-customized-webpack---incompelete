import React from "react";
import { Toast } from "react-bootstrap";

export function Confirmation({ toggle }) {
  return (
    <>
      <Toast onClose={() => toggle(false)}>
        <Toast.Header>
          <strong className="mr-auto">Your order is in the oven</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
          lorem be lorem lorem be lorem lorem be lorem lorem be lorem
        </Toast.Body>
      </Toast>
    </>
  );
}
