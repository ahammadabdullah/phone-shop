import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();
  return (
    <div>
      <Banner />
      <Phones phones={phones} />
    </div>
  );
};

export default Home;
