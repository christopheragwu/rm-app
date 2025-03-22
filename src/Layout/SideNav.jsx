import styles from "./Layout.module.css";
import SideNavMenu from "../Components/SideNav Components/SideNavMenu";

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <SideNavMenu></SideNavMenu>
    </div>
  );
};

export default SideNav;
