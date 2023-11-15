import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { projectName } = useParams();
  return <h1>{projectName}</h1>;
};

export default Details;
