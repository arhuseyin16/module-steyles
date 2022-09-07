import styles from "./a.module.css"

console.log(styles);

function A() {
    return(
       <div className={styles.title}>
           A
       </div>
    )
}

export default A;