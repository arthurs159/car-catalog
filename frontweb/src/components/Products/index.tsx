import './styles.css';
import CarCard from 'assets/images/CarCard.svg';
import BuyButton from 'components/BuyButton';

const Products = () => {
  return (
    <div className="container">
      <div className="box-control">
        <div className="img-container">
          <div className="image-container">
            <img src={CarCard} alt="Nome do produto" />
          </div>
        </div>
        <div className="text-container">
          <h1>Audi Supra TT</h1>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </h6>
        </div>
        <div>
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Products;
