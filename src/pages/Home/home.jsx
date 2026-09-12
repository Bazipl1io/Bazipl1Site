import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a href="/contacts">Contacts</a>
        <a href="/projects">Projects</a>
        <a href="/streams">Streams</a>
      </div>
    </div>
  );
}

export default Home;
