import NavBar from 'components/NavBar';
import Products from 'components/Products';
import SearchField from 'components/SearchField';
import './styles.css';

const Catalogo = () => {
  return (
    <>
      <NavBar />
      <SearchField />
      <div className="container my-4">
          <Products />
          <Products />
          </div>
    </>
  );
};

export default Catalogo;
