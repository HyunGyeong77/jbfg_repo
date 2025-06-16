import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Main} from 'main/Main';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
