import { useState } from "react";
import styles from "./menubar.module.css";

function MenuBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Верхняя полоса на всю ширину */}
            <header className={styles.headerBar}>
                <button
                    className={styles.menuButton}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </header>

            {/* Выпадающее меню */}
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className={styles.menuCard}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <a href="/">Home</a>
                        <a href="/contacts">Contacts</a>
                        <a href="/projects">Projects</a>
                        <a href="/streams">Streams</a>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuBar;
