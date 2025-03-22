import styles from "./SideNavMenu.module.css";

const SideNavMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className={styles.listItems}>
            {" "}
            <a href="#" className={styles.sideNavMenu}>
              <i class="fa-solid fa-house"></i>Home
            </a>
            <a href="#" className={styles.sideNavMenu}>
              <i class="fa-solid fa-photo-film"></i>Media
            </a>
            <a href="#" className={styles.sideNavMenu}>
              <i class="fa-solid fa-users"></i>Communities
            </a>
            <a href="#" className={styles.sideNavMenu}>
              <i class="fa-solid fa-bell"></i>Notifications
            </a>
            <a href="#" className={styles.sideNavMenu}>
              See more
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavMenu;
