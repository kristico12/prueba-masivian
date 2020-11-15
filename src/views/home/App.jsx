// dependencies
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//actions
import ComicsActions from '../../redux/comics/actions';
// components
import LoadingData from '../../components/loading/loadingData.jsx';
import Comic from '../../components/comic/comic.jsx';
//utils
import { ramdomIntergerNumberGenerate } from '../../utils/functions';
// styles
import './style.scss';

function App(props) {
  const [numRandom, setNumRandom] = useState(parseInt(ramdomIntergerNumberGenerate(1, 1000)));
  const [comics, setComics] = useState(props.comics);
  const [loading, setLoading] = useState(false);
  const [calification, setCalification] = useState(0);

  useEffect(() => {
    async function getComics() {
      await props.actions.ComicsLoad(numRandom);
    }
    getComics();
  }, [numRandom]);

  useEffect(() => {
    setComics(props.comics);
  }, [props.comics]);

  useEffect(() => {
    if (props.error.size > 0) {
      setLoading(true);
    }
  }, [props.error]);

  useEffect(() => {
    if (props.success) {
      setLoading(true);
    }
  }, [props.success]);

  const handleNumRandom = () => {
    setLoading(false); // loading
    props.actions.CleanError(); // limpiar errores
    props.actions.CleanSuccess(); // limpiar success
    setCalification(0); // reiniciar la calificacion
    setNumRandom(parseInt(ramdomIntergerNumberGenerate(1, 1000)));
  }


  return (
    <Fragment>
      {
        !loading ? <LoadingData />
          :
          <Fragment>
            {
              props.error.size > 0 ?
                <div className="app-content app-not-commic">
                  <h3>Comic No Encontrado Por Favor, recargue la pagina!</h3>
                  <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://onlinezebra.com/wp-content/uploads/2019/01/error-404-not-found.jpg" alt="not Found" />
                </div>
                :
                <div className="app-content">
                  <Comic
                    comics={comics}
                    calification={calification}
                    changeCalification={(i) => setCalification(i)}
                    handleNumRandom={() => handleNumRandom()}
                  />
                </div>
            }
          </Fragment>
      }
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    comics: state.get('comicsReducer').get('comicsDataReducer'),
    error: state.get('comicsReducer').get('comicsErrorsReducer'),
    success: state.get('comicsReducer').get('comicsSuccessReducer'),
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ComicsActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
