import './App.css';

const download = () => {
  window.open('https://cypress.io/', '_blank');
}

function App() {
  download();
  return (
    <div className="App">
      <span>ERR_FAILED (-2) loading 'https://cypress.io/'</span>
    </div>
  );
}

export default App;
