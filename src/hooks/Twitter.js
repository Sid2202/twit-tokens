import axios from "axios";
import { useState, useEffect } from "react";
export function GetUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("/user").then((response) => {
      setUser(response.data);
    });
  }, []);
  return user;
}
