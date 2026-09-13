import { useState } from "react";
import styles from "./contacts.module.css";

function Contacts() {
  const [toastMessage, setToastMessage] = useState("");

  // Copy logic
  const handleCopy = (text, name) => {
    navigator.clipboard.writeText(text);
    setToastMessage(`Copied: ${name}`);

    setTimeout(() => {
      setToastMessage("");
    }, 2500);
  };

  // Contact categories
  const sections = [
    {
      title: "Media",
      items: [
        {
          id: "telegram",
          title: "Telegram Channel",
          link: "https://t.me/Bazipl1",
          type: "button",
          text: "Open ↗",
        },
        {
          id: "youtube",
          title: "YouTube",
          link: "https://www.youtube.com/@bazipl1",
          type: "button",
          text: "Open ↗",
        },
        {
          id: "twitch",
          title: "Twitch",
          link: "https://www.twitch.tv/bazipl1",
          type: "button",
          text: "Open ↗",
        },
      ],
    },
    {
      title: "Work",
      items: [
        {
          id: "github",
          title: "GitHub",
          link: "https://github.com/Bazipl1io",
          type: "button",
          text: "Open ↗",
        },
        {
          id: "linkedin",
          title: "LinkedIn",
          link: "https://www.linkedin.com/in/nazarshvetsm/",
          type: "button",
          text: "Open ↗",
        },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          id: "telegram",
          title: "Telegram main | game: @Bazipl",
          value: "@Bazipl",
          label: "Telegram main handle",
          type: "copy",
        },
        {
          id: "telegram",
          title: "Telegram work: @Bazipl1",
          value: "@Bazipl1",
          label: "Telegram work handle",
          type: "copy",
        },
        {
          id: "discord",
          title: "Discord: @bazipl1",
          value: "bazipl1",
          label: "Discord handle",
          type: "copy",
        },
      ],
    },
  ];

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsCard}>
        <h1 className={styles.title}>Contacts</h1>

        {/* Location Section */}
        <div className={styles.locationSection}>
          <span className={styles.locationLabel}>Location:</span>
          <a
            href="https://www.google.com/maps/place/Kharkiv"
            target="_blank"
            rel="noreferrer"
            className={styles.locationLink}
          >
            📍 Kharkiv, Ukraine
          </a>
        </div>

        {/* Categories (Media, Work, Contact) */}
        <div className={styles.sectionsContainer}>
          {sections.map((section) => (
            <div key={section.title} className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>{section.title}</h2>

              <div className={styles.contactsList}>
                {section.items.map((item, idx) => (
                  <div key={idx} className={styles.contactRow}>
                    <span className={styles.contactTitle}>{item.title}</span>

                    {item.type === "button" ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`${styles.actionBtn} ${styles[item.id]}`}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleCopy(item.value, item.label)}
                        className={`${styles.tagBtn} ${styles[item.id]}`}
                        title="Click to copy"
                      >
                        Copy
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}
    </div>
  );
}

export default Contacts;
