import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../hook/useFetchData";
import User from "../components/user/User";
import Charts from "../components/charts/Charts";
import Repositories from "../components/repos/Repositories";
import UserSkeleton from "../components/user/UserSkeleton";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, error, loading } = useFetchData(params.user);

  if (error) navigate("/");

  return (
    <>
      {loading ? <UserSkeleton /> : <User data={data} />}
      <Charts />
      <Repositories />
    </>
  );
};

export default Profile;
