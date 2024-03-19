import React, { useState } from 'react';
import satData from './components/satData';
import Banner from './components/Banner';
import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {
  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map(data => data.orbitType))];

  const filterByType = currentType => {
    const filteredSat = satData.filter(newSatDisplay => newSatDisplay.orbitType === currentType);
    setSat(filteredSat);
  };

  return (
    <>
      <div className="flier"><img src="https://cdn.pixabay.com/photo/2017/09/21/07/57/satellite-2771043_640.png" alt="Image 1" /></div>
      <Banner />
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;