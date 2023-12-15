import { Heading } from "@chakra-ui/react";
import React from "react";


const GameDetailAttribute = ({ detailTitle, children }) => {
  return (<>
    <Heading size="lg" color="gray.600">{ detailTitle }</Heading>
    { children }
  </>)
}

export default GameDetailAttribute;
