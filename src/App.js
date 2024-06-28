import styles from './App.module.css';
import Titulo from './components/Titulo';
import Buscador from './components/Buscador';
import InfoCep from './components/InfoCep/';
import { useState } from 'react';
import api from './services/api.js';
import Loading from './components/Loading';

function App() {
  const [cep, setCep] = useState('');
  const [cepInfo, setCepInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  function validaCEP() {
    const regex = /[a-z ]/gi;
    return !regex.test(cep) && cep.length === 8;
  }

  function validaReqCep(req) {
    const erro = Object.keys(req).length === 1 ? false : true;
    return erro;
  }

  async function buscaCEP(e) {
    e.preventDefault();
    setIsFetching(true);
    if (validaCEP()) {
      const req = await api(cep);
      setIsFetching(false);
      if (validaReqCep(req)) return setCepInfo(req);
      return alert('CEP não encontrado.');
    }
    setIsFetching(false);
    return alert('Digite um CEP válido!');
  }

  return (
    <section className={styles.containerPrincipal}>
      <Titulo />
      <Buscador cep={cep} setCep={setCep} buscaCEP={(e) => buscaCEP(e)} />
      {isFetching && <Loading />}
      {Object.keys(cepInfo).length > 0 && <InfoCep {...cepInfo} />}
    </section>
  );
}

export default App;
