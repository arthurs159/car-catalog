import { ReactComponent as MainImage} from 'assets/images/carros.svg';
import NavBar from "components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <div className="home-card">
              <div className="image-container">
                     <MainImage />
              </div>
              <div className="text-container">
                     <h1>O carro perfeito para você</h1>
              </div>
        </div>
      </div>
    </>
  );
};

export default Home;
