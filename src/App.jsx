import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './componentes/NavBar/NavBar.jsx'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Todos los productos"/>
    </>
  )
}

export default App
