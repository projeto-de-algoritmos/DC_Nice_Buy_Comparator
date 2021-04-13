import React, { useState } from 'react';
import './App.css';

import WishListComparator from './DataStructures/WishListComparator';
import globalRank from './DataStructures/globalRank';

function App() {
  const [myRank, setMyrank] = useState(Object.keys(globalRank));
  const [product1, setProduct1] = useState(Object.keys(globalRank)[0]);
  const [product2, setProduct2] = useState(Object.keys(globalRank)[1]);

  function ListOptions(){
    let list = Object.keys(globalRank);
    const listOptions = list.map((option) =>
      <option value={option}>
        {option}
      </option>
    )
    return listOptions
  }

  function ListMyRank(){
    let result = [];
    for(let i = 0; i < myRank.length; i++){
      result.push(
        <tr>
          <td className="tableProduct">{i+1}</td>
          <td className="tabbleRank">{myRank[i]}</td>
        </tr>
      )
    }
    return (
      <table>
        <thead>
          <tr>
            <th className="tableProduct">#</th>
            <th className="tableRank">Produto</th>
          </tr>
        </thead>
        <tbody>
          {result}
        </tbody>
      </table>
    );
  }

  const switchProduct = async() => {
    await setMyrank( (previus) => {
      let aux = [...previus];
      let t = aux.indexOf(product2);
      aux[aux.indexOf(product1)] = product2;
      aux[t] = product1;
      return aux;
    })
  }

  return (
    <div className="conteiner">
      <header className='header'>
        NICE BUY COMPARATOR
      </header>
      <div className="form">
        <div className="description">Abaixo temos seu rankeamento de produtos por categoria, para trocar a posição dos produtos basta escolher dois e clicar em trocar.</div>
        <div className="inputs">
          <label for="produto1" className="inputProduto1"> Produto 1: </label>
          <select id="produto1" className="inputProduto1" value={product1} onChange={(e) => {setProduct1(e.target.value)}}>
            <ListOptions></ListOptions>
          </select>
          <label for="produto2" className="inputProduto2"> Produto 2: </label>
          <select id="produto2" className="inputProduto2" value={product2} onChange={(e) => {setProduct2(e.target.value)}}>
            <ListOptions></ListOptions>
          </select>
        </div>
        <button className="switchBtn" onClick={switchProduct}> Trocar </button>
        <div className="scrollRank">
          <ListMyRank></ListMyRank>
        </div>
      </div>
      <div className="result">
      </div>
    </div>
  );
}

export default App;
