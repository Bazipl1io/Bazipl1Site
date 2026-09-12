import styles from './streams.module.css';

function Stream({ channel }) {
  return (
    <iframe
      className={styles.player}
      src={`https://player.twitch.tv/?channel=${channel}&parent=localhost`}
      allowFullScreen
      title={`${channel} Twitch stream`}
    />
  );
}

function Streams() {
  const friends = [
    "f1shf1ssh"
  ];

  return (
    <div className={styles.streams}>

      {/* My stream */}
      <section className={styles.myStream}>
        <h1>My Stream — Bazipl1</h1>

        <Stream channel="bazipl1" />
      </section>


      {/* Friends' streams */}
      <section className={styles.friendsStreams}>
        <h2>Friends' Streams</h2>

        <div className={styles.friendsGrid}>
          {friends.map((friend) => (
            <div className={styles.friendStream} key={friend}>
              <h3>{friend}</h3>

              <Stream channel={friend} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Streams;
