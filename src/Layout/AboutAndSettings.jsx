import styles from "./Layout.module.css";
import AboutAndSettingsNav from "../Components/SideNav Components/AboutAndSettingsNav";

const AboutAndSettings = () => {
  return (
    <div className={styles.aboutAndSettings}>
      <AboutAndSettingsNav></AboutAndSettingsNav>
    </div>
  );
};

export default AboutAndSettings;
