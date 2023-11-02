import styles from "./NotFound.module.css";

const NotFound:React.FC = () => {
    return (
        <>
            <main className={styles.main}>
                <h1>404 not found</h1>
                <p>The page you are searching for was not found.</p>
            </main>
        </>
    )
}

export default NotFound;