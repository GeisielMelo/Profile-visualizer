import User from "../components/user/User";
import Charts from "../components/charts/Charts";
import Repositories from "../components/repos/Repositories";
import Footer from "../components/footer/Footer";
import ButtonBackToTop from "../components/buttons/BackToTop";

const Profile: React.FC = () => {
  return (
    <>
      <User />
      <Charts />
      <Repositories />
      <Footer/>
      <ButtonBackToTop/>
    </>
  );
};

export default Profile;
