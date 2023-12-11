import { UserData } from "../../../types/index";
import { StyledSection, StyledProfile } from "../../styles/StyledUser";
import { TimeFormatter } from "../../utils/TimeFormatter";
import { UrlFormatter } from "../../utils/UrlFormatter";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

interface Data {
  data: UserData | null;
}

const User: React.FC<Data> = ({ data }) => {
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

        {data?.blog && (
          <a
            className="profile-github"
            href={UrlFormatter(data?.blog)}
            target="_blank"
          >
            @Portfolio
          </a>
        )}

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
    </StyledSection>
  );
};

export default User;
