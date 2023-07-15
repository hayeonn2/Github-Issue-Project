import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Header, IssueDetail } from './components';
import { DetailProvider, ListProvider } from './contexts';

function App() {
  return (
    <BrowserRouter>
      <ListProvider>
        <DetailProvider>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/issues/:number" element={<IssueDetail />} />
          </Routes>
        </DetailProvider>
      </ListProvider>
    </BrowserRouter>
  );
}

export default App;
