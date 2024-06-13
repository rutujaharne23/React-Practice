import './App.css';
import { Calculator } from './projects/calculator';
import { ModalImageGallery } from './projects/modal-image-gallery';
import { TableSearch } from './projects/table-search';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { MultiStepper } from './projects/multi-stepper';
import { CustomHooks } from './projects/customHooks';
import { UsePreviousHooks } from './components/UsePreviousHooks';
import { InfiniteScroll } from './projects/infinite-scroll';
import { DragAndDrop } from './projects/dragAndDrop';
import { AlertBox } from './projects/alertBox';
import { LazyLoading } from './projects/lazyLoading';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/table' element={<TableSearch />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/modalImageGallery' element={<ModalImageGallery />} />
            <Route path='/multiStepper' element={<MultiStepper />} />
            <Route path='/customHooks' element={<CustomHooks />} />
            <Route path='/usePreviousHooks' element={<UsePreviousHooks />} />
            <Route path='/infiniteScroll' element={<InfiniteScroll />} />
            <Route path='/dragAndDrop' element={<DragAndDrop />} />
            <Route path='/alertBox' element={<AlertBox />} />
            <Route path='/lazyLoading' element={<LazyLoading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
