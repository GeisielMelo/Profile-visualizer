import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../../hook/useFetchData";
import { StyledSection, StyledProfile } from "../../styles/StyledUser";
import { TimeFormatter } from "../../utils/TimeFormatter";
import { UrlFormatter } from "../../utils/UrlFormatter";
import UserSkeleton from "./UserSkeleton";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BusinessIcon from '@mui/icons-material/Business';

type UserData = {
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

const User: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const url = `https://api.github.com/users/${params.user}`;
  const { data, error, loading } = useFetchData<UserData>(url);

  if (error) navigate("/");

  return (
    <StyledSection>
      {loading ? (
        <UserSkeleton />
      ) : (
        <StyledProfile>
          <div className="profile-image">
            <img src={data?.avatar_url} alt="" />
          </div>
          <h1 className="profile-name">{data?.name}</h1>

          <a
            className="profile-github"
            href={data?.blog ? UrlFormatter(data.blog) : data?.html_url}
            target="_blank"
          >
            @{data?.login}
          </a>

          <ul>
            {data?.company && (
              <li>
                <BusinessCenterIcon fontSize="small" />
                {data?.company}
              </li>
            )}
            {data?.location && (
              <li>
                <LocationOnIcon fontSize="small" />
                {data?.location}
              </li>
            )}
            {data?.created_at && (
              <li>
                <CalendarMonthIcon fontSize="small" />
                Joined at {TimeFormatter(data?.created_at)}
              </li>
            )}
            {data?.twitter_username && (
              <li>
                <TwitterIcon fontSize="small" />
                {data?.twitter_username}
              </li>
            )}
            {data?.email && (
              <li>
                <AlternateEmailIcon fontSize="small" />
                {data?.email}
              </li>
            )}
            {data?.hireable && (
              <li>
                <BusinessIcon fontSize="small" />
                Open To Work!
              </li>
            )}
          </ul>

          <p className="profile-bio">{data?.bio}</p>

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
      )}
    </StyledSection>
  );
};

export default User;
