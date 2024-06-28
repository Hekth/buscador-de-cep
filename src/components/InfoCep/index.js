import styles from './InfoCep.module.css';

export default function InfoCep(props) {
    const array = Object.entries(props);
    return (
        <div className={styles.infoContainer}>
            {array.map((i, index) => {
                if (!i[1]) i[1] = 'Não informado';
                return <p key={index}>{i.join(': ').toUpperCase()}</p>
            })}
        </div>
    );
}