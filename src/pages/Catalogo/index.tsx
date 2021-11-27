import Products from 'components/Products';
import SearchField from 'components/SearchField';
import './styles.css';

const Catalogo = () => {
  return (
    <>
      <SearchField />
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
          <div className="col-sm-6 col-lg-4">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogo;
