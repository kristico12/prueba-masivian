// dependencies
import React, {useState} from 'react';
// styles
import './style.scss';
//components
import Calification from '../calification/calification.jsx';

function Comic(props) {
  const [loadImg, setLoadImg] = useState(false);
  return (
    <div className="comic-content">
      { loadImg && <h1>{props.comics.get('title')}</h1> }
      <img src={props.comics.get('img')} alt="imagen-comic" onLoad={() => setLoadImg(true)} onError={() => setLoadImg(true)} />
      { loadImg && <Calification calification={props.calification} changeCalification={(i) => props.changeCalification(i)}/> }
      { loadImg &&
        <div className="comic-content-buttom">
          <button onClick={() => props.handleNumRandom()}>Buscar otro Comic</button>
        </div>}
    </div>
  );
}

export default Comic;
