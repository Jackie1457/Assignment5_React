import './App.css';
import { GridProvider } from './context/GridContext';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <GridProvider>
      <div className="App">
        <ParentComponent />
      </div>
    </GridProvider>
  );
}

export default App;
