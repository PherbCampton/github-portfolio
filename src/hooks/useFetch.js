import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  const baseURL =
    "https://api.github.com/users/pherbcampton/repos?page=1&per_page=100";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return { repos, error };
}
