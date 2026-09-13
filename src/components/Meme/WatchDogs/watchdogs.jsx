import React, { useState, useEffect, useRef } from "react";
import styles from "./WatchDogs.module.css";

const CONSOLE_LOGS = [
  { percent: 0, text: "[*] Initializing DedSec Exploit Kit v4.2..." },
  { percent: 10, text: "[*] Establishing encrypted socket to cTOS_Node_09..." },
  { percent: 22, text: "[+] Firewall bypassed successfully. Shell access granted." },
  { percent: 35, text: "[*] Injecting kernel-level payload into system..." },
  { percent: 48, text: "[*] Accessing user_credentials.db & local tokens..." },
  { percent: 62, text: "[*] Extracting GPS geolocation & network topology..." },
  { percent: 75, text: "[!] Encrypting host filesystem with AES-256-CBC..." },
  { percent: 88, text: "[*] Uploading stolen data packets to DedSec C2 server..." },
  { percent: 98, text: "[*] Cleaning audit logs & erasing footprints..." },
  { percent: 100, text: "[+] SYSTEM OVERRIDDEN. WE ARE DEDSEC." }
];

export default function WatchDogs({ onClose }) {
  const [progress, setProgress] = useState(0);
  const [showFucks, setShowFucks] = useState(false);
  const [isRickrolled, setIsRickrolled] = useState(false);
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const logsEndRef = useRef(null);

  const playHackerBeep = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      const audioCtx = new AudioCtx();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(150, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  };

  useEffect(() => {
    playHackerBeep();

    // 12 секунд загрузки (100 * 120ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Автофокус на поле ввода при клике в любой точке терминала
  useEffect(() => {
    if (progress >= 100 && inputRef.current) {
      inputRef.current.focus();
    }
  }, [progress]);

  // Автоскролл консоли вниз
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [progress]);

  const handleCloseAttempt = () => {
    playHackerBeep();
    setShowFucks(true);

    setTimeout(() => {
      setShowFucks(false);
      setIsRickrolled(true);
    }, 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const val = userInput.trim().toLowerCase();
      if (val === "y" || val === "yes") {
        onClose();
      } else if (val === "n" || val === "no") {
        handleCloseAttempt();
      }
      setUserInput("");
    }
  };

  const currentLogs = CONSOLE_LOGS.filter((log) => progress >= log.percent);

  return (
    <div className={styles.overlay}>
      <div className={styles.glitchBackground}></div>

      <div className={styles.modal}>
        {/* Шапка Linux-окна */}
        <div className={styles.header}>
          <div className={styles.windowControls}>
            <span className={`${styles.dot} ${styles.redDot}`} onClick={handleCloseAttempt}></span>
            <span className={`${styles.dot} ${styles.yellowDot}`}></span>
            <span className={`${styles.dot} ${styles.greenDot}`}></span>
          </div>
          <span className={styles.headerTitle}>
            {isRickrolled ? "root@dedsec-node:~" : "root@dedsec-terminal:~#"}
          </span>
          <button className={styles.closeBtn} onClick={handleCloseAttempt}>✕</button>
        </div>

        {isRickrolled ? (
          <div className={styles.rickrollContainer}>
            <div className={styles.videoShield} />
            <iframe
              className={styles.modalVideo}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=dQw4w9WgXcQ"
              title="Rickroll"
              allow="autoplay; encrypted-media"
            />
          </div>
        ) : (
          <div className={styles.terminalBody} onClick={() => inputRef.current?.focus()}>
            {/* Банер терминала */}
            <div className={styles.asciiBanner}>
              DedSec OS v2.4.0 (x86_64-pc-linux-gnu)
            </div>

            {/* Прогресс-бар */}
            <div className={styles.progressSection}>
              <div className={styles.progressText}>
                {progress < 100
                  ? `OVERRIDING SYSTEM: [ ${progress}% ]`
                  : "SYSTEM OVERRIDDEN. ALL DATA EXFILTRATED."}
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
              </div>
            </div>

            {/* Логи терминала */}
            <div className={styles.logsArea}>
              {currentLogs.map((log, index) => (
                <div key={index} className={styles.consoleLine}>
                  {log.text}
                </div>
              ))}
              <div ref={logsEndRef} />
            </div>

            {/* Ввод команд Y/N как в Linux */}
            <div className={styles.promptLine}>
              {progress < 100 ? (
                <span className={styles.disabledPrompt}>
                  [WAIT] Processing exfiltration payload...
                </span>
              ) : (
                <div className={styles.inputWrapper}>
                  <span className={styles.promptText}>
                    Accept DedSec terms & conditions? [Y/n]:
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    className={styles.terminalInput}
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    maxLength={3}
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {showFucks && (
          <div className={styles.fuckOverlay}>
            <span className={styles.fuckText}>🖕 🖕 🖕</span>
            <span className={styles.fuckSubText}>YOU CANNOT ESCAPE DEDSEC</span>
          </div>
        )}
      </div>
    </div>
  );
}
