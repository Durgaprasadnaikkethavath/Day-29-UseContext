import React, { useContext } from "react";
import { studentDetails } from "./App";

const CompC = () => {
  const dataStudent = useContext(studentDetails);
  return (
    <>
      <h1>Welcome UseContext comp c</h1>

      <h3>the name {dataStudent[0]}</h3>
      <h3>the marks {dataStudent[1]}</h3>
    </>
  );
};

export default CompC;
