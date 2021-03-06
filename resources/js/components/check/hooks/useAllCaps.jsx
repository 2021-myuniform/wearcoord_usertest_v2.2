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


    axios.get("/api/caps").then((res) => {
        console.log(res);
      const data = res.data.map((caps) => ({
        id: caps.id,
        url: caps.url,
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
