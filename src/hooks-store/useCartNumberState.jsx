import React, { useState } from "react";

const useCartNumberState = () => {
  //
  const [cartNumber, setCartNumber] = useState(0);
  return { cartNumber, setCartNumber };
};

export default useCartNumberState;
