import { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';
import PigList from './Components/PigList';
import Header from './Components/Header';
import Main from './Components/Main';


function App() {
  const [pigListData, setPigListData] = useState([]);
  const [selectedPig, setSelectedPig] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    const getPigNfts = async() => {
      const openseaData = await axios.get(
        '/assets?asset_contract_address=0x8661889Aa1D54504c3239744B800E79A7894a923&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPigListData(openseaData.data.assets)
    }
    getPigNfts()
  },[])

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      {pigListData.length > 0 && (
        <>
          <Main selectedPig={selectedPig} pigListData={pigListData}/>
          <PigList pigListData={pigListData} setSelectedPig={setSelectedPig} search={search}/>
        </>
      )}
    </div>
  );
}

export default App;
