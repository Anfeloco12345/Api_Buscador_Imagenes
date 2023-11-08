import { useState } from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarResultados = async () => {
    const API_KEY = '5Ozvt6r4qz7j2tvAOZCl5N2QYar6ja36q85zJyqebok'
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=20`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultados(data.results)
    console.log(data);
  }

  return (
    <div className="App">
      <div className="title">
      CLASE #8 KAMBPCODE: VERCEL + REPO GITHUB + API
      </div>
      <div className='searchBox'>
        <input className='searchBoxInput' placeholder='Buscador de imagenes de fotografia... deben ser frase en ingles' onChange={e => setValor(e.target.value)} />
        <button onClick={() => buscarResultados()} className='searchBoxBtn'>BUSCAR</button>
      </div>

      <div className='mainContent'>
        <div className='mainContentGrid'>
          {
            resultados.map((elemento, indice) => {
              return (
                <img key={indice} src={elemento.urls.regular}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;