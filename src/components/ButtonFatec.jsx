import styles from './ButtonFatec.module.css'

function ButtonFatec(props) {
    const {label} = props
    return (
        <button className = {styles.buttonFatec}>
            Fatec: {label}
        </button>
    )
}

export default ButtonFatec