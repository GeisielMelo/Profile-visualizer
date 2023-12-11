import { useEffect, useState } from "react";
import { UserData, GitHubApiError } from "../../types/index.ts";

export const useFetchData = (user: string | undefined) => {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<GitHubApiError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (response.status == 404) throw new Error();
        if (response.ok) setData(await response.json());
      } catch (error) {
        setError({ message: "Erro desconhecido" });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  return { data, error, loading };
};

export default useFetchData;
