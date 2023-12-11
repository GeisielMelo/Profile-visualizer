import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hook/useFetchData";
import User from "../components/User";
import UserSkeleton from "../components/UserSkeleton";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useFetchData(params.user);

  if (error) navigate("/");

  return loading ? <UserSkeleton /> : <User data={data} />;
};

export default Profile;
