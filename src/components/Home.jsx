import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <h2>This is the Home component</h2>

      {
        navigation.state
      }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
