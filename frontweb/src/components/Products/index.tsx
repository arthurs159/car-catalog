import './styles.css';
import CarCard from 'assets/images/carro1.png';
import BuyButton from 'components/BuyButton';

const Products = () => {
  return (
    <div className="base-card">
      <div className="card-top-container">
        <img src={CarCard} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h1>Audi Supra TT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
        <div>
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Products;
