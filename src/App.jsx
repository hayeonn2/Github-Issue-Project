import { Header } from './components';
import { IssueList } from './components';
import { IssueProvider } from './contexts/';

function App() {
  return (
    <IssueProvider>
      <Header />
      <main>
        <IssueList />
      </main>
    </IssueProvider>
  );
}

export default App;
