import './App.css';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';


function App() {
  let [loading, setLoading] = useState(true);
  let [photos, setPhotos] = useState([]);
  let [query, setQuery] = useState('nature');
  const API_KEY = "563492ad6f91700001000001f600d4b0691a48db9dc1fb4924dc754d";


  useEffect(() => {
    getImages();
  }, [])

  function getImages() {
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {
      headers: {
        Authorization: API_KEY
      }
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        //console.log(data.photos);
        setPhotos(() => data.photos);
        setLoading(() => false);
      })
  }


  return (
    <div className="cont">
      <div className="search">
        <input type="text" placeholder='e.g. apples, nature' onChange={(e) => {
          setQuery(() => e.target.value)
        }} />
        <button onClick={() => { getImages() }}>search</button>
      </div>

      <div className="img-cont">
        {loading ? <h1>loading...</h1> :
          photos.map((elem) => {
            return <Cards key={elem.id} url={elem.src.medium} />
          })
        }
      </div>
    </div>
  );
}

export default App;
