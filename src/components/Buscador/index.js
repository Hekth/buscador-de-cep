import { FaSearchLocation } from "react-icons/fa";
import styles from './Buscador.module.css';

export default function Buscador({ cep, setCep, buscaCEP }) {
    function handleCepChange({ target: { value } }) {
        setCep(value);
        console.log(cep);
    }

    return (
        <form className={styles.formulario} onSubmit={(e) => buscaCEP(e)}>
            <input
                className={styles.buscador}
                autoFocus
                value={cep}
                onChange={(e) => handleCepChange(e) }
                type="text"
                placeholder="Digite um CEP"
            />
            <button className={styles.botao} type="submit">
                <FaSearchLocation size={22}/>
            </button>
        </form>
    );
}