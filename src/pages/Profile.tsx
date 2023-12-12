import User from "../components/user/User";
import Charts from "../components/charts/Charts";
import Repositories from "../components/repos/Repositories";

const Profile: React.FC = () => {
  return (
    <>
      <User />
      <Charts />
      <Repositories />
    </>
  );
};

export default Profile;
