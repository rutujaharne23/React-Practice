import logo from './logo.svg';
import './App.css';
import { Calculator } from './projects/calculator';
import { ModalImageGallery } from './projects/modal-image-gallery';
import { TableSearch } from './projects/table-search';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <TableSearch />
    </div>
  );
}

export default App;
