import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <img src="../../../../public/media/icons/shop.png" alt="logo" />
          <span>ShopKart</span>
        </div>
        <div className={styles.links}>
          <ul>
            <li>Catagories</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div className={styles.search}>
          <label htmlFor="search">
            <span>
              <img
                src="../../../../public/media/icons/search.png"
                alt="megnifier"
              />
            </span>
            <input type="text" id="search" placeholder="Search Product" />
          </label>
        </div>
        <div className={styles.account}>
          <img src="../../../../public/media/icons/user.png" alt="user" />
          <span>Account</span>
        </div>
        <div className={styles.cart}>
          <img src="../../../../public/media/icons/cart.png" alt="user" />
          <span>Account</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
