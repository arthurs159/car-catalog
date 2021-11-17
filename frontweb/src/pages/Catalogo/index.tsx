import NavBar from 'components/NavBar';
import SearchButton from 'components/SearchButton';
import './styles.css';

const Catalogo = () => {
  return (
    <>
      <NavBar />

      <div className="box-container">
        <div className="search-container">
              <div className="form">
              <input type="text" className="form-control" placeholder="Digite sua busca"/> 
              </div>
              <div className="btn-container">
                     <SearchButton />
              </div>
        </div>
      </div>
    </>
  );
};

export default Catalogo;
