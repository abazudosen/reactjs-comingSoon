import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return <p style={{ color: "red" }}>This is required</p>;
      case "pattern":
        return <p style={{ color: "red" }}>Enter a valid email address</p>;
      default:
        return null;
    }
  }

  return null;
}
