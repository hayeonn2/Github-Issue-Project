import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { IssueDetail } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/issues/:number" element={<IssueDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
