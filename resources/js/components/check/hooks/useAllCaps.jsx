import axios from "axios";
import { useState } from "react";

export const useAllCaps = () => {
  const [userCaps, setUserCaps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCaps = () => {
    setLoading(true);
    setError(false);
    console.log("capsだよ");


    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res);
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`
      }));
      setUserCaps(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getCaps, userCaps, loading, error }
};
