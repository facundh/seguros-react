import React from "react";

const Spinner = () => {
  return (
    <>
      <span
        class="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Loading...</span>
    </>
  );
};

export default Spinner;
