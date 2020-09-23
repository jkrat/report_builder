import React from 'react';
import './App.css';
import { data } from './data/sample1';

// import Table from './components/table';
// import Table from './components/table_with_plotly';
import Table from './components/pivottable_config1';

function App() {
  return (
    <div className="App">
        <Table data={data} />
    </div>
  );
}

export default App;
