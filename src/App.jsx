import { Header } from './components';
import { IssueList } from './components';
import { IssueProvider } from './contexts/';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <IssueProvider>
        <Header />
        <main>
          <IssueList />
        </main>
      </IssueProvider>
    </BrowserRouter>
  );
}

export default App;
