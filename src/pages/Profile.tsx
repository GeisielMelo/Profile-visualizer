import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSection, StyledProfile } from "../styles/StyledProfile";

interface UserData {
  login: string;
  avatar_url: string;
  html_url: string;
  followers_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

type Data = UserData | null;

const Profile = () => {
  const [data, setData] = useState<Data>(null);
  const [loading, setLoading] = useState<boolean>(false);
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
      setLoading(true);
      fetchData(params.user);
      setLoading(false);
    }
  }, [data, params.user]);

  return (
    <StyledSection>
      <StyledProfile>
        <div className="profile-image">
          <img src={data?.avatar_url} alt="" />
        </div>
        <h1 className="profile-name">{data?.name}</h1>
        <a className="profile-github" href={data?.html_url} target="_blank">
          @{data?.login}
        </a>

        <ul>
          {data?.company && <li>{data?.company}</li>}
          {data?.location && <li>{data?.location}</li>}
          {data?.created_at && <li>{data?.created_at}</li>}
          {data?.twitter_username && <li>{data?.twitter_username}</li>}
          {data?.email && <li>{data?.email}</li>}
        </ul>

        <div className="profile-social">
          <div>
            <h1>{data?.public_repos || "0"}</h1>
            <p>Repositories</p>
          </div>
          <div>
            <h1>{data?.followers || "0"}</h1>
            <p>Followers</p>
          </div>
          <div>
            <h1>{data?.following || "0"}</h1>
            <p>Following</p>
          </div>
        </div>
      </StyledProfile>
    </StyledSection>
  );
};

export default Profile;
