import styles from './InputFatec.module.css' 

function InputFatec(props){
    const {type, placeholder} = props
    return (
        <input className={styles.inputFatec} type = {type} placeholder = {placeholder}/>

    )
}

export default InputFatec