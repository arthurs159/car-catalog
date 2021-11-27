import { ReactComponent as MainImage } from 'assets/images/carros.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="main-div1">
      <div className="main-container">
        <div className="home-card">
          <div className="image-container">
            <MainImage />
          </div>
          <div className="text-container">
            <h1>O carro perfeito para você</h1>
            <h2>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </h2>
          </div>
        </div>
        <div>
        <NavLink to="/products"><ButtonIcon/></NavLink>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
