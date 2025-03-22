import styles from "./AboutAndSettings.module.css";

const AboutAndSettingsNav = () => {
  return (
    <div>
      <ul>
        <li className={styles.listIcons}>
          <a href="#" className={styles.aboutAndSettingsNav}>
            <i class="fa-solid fa-circle-info"></i>About us
          </a>

          <a href="#" className={styles.aboutAndSettingsNav}>
            <i class="fa-solid fa-gear"></i>Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutAndSettingsNav;
