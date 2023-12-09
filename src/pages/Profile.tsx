import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface UserData {
  id: number;
  name: string;
}

type Data = UserData | null;

const Profile = () => {
  const [data, setData] = useState<Data>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async (user: string) => {
      try {
        const response = await fetch(`https://api.github.com/users/${user}`);
        if (response.ok) {
          setData(await response.json());
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (!data && params.user) {
      fetchData(params.user);
    }
  }, [data, params.user]);

  return (
    <section>
      <p>{data?.name}</p>
    </section>
  );
};

export default Profile;
