import React from "react";
import { useEffect, useState } from "react";

import { login, jwt } from "./cart";
import Login from "./Login";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    // login("sally", "123");
    const subscription = jwt.subscribe((val) => setToken(val ?? ""));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
    </div>
  );
};

export default CartContent;
