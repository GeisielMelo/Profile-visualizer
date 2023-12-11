import AppRoutes from "./AppRoutes.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { SkeletonTheme } from "react-loading-skeleton";

const App = () => {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <GlobalStyles />
      <AppRoutes />
    </SkeletonTheme>
  );
};

export default App;
