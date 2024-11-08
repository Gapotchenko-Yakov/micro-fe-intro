import { useState, useEffect } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8080";

export const jwt = new BehaviorSubject(null);

export const login = (username, password) =>
  fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);
      // getCart()
      return data.access_token;
    })
    .catch((err) => console.log(err));

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);

  useEffect(() => {
    const subscription = jwt.subscribe((val) => setLoggedIn(!!val));
    return () => subscription.unsubscribe();
  }, []);

  return loggedIn;
}
