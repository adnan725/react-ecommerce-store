import styles from "./Header.module.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.log}>LOGO</div>
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
            <span>icons</span>
            <input type="text" id="search" placeholder="Search Product" />
          </label>
        </div>
        <div className={styles.account}>ACCOUNT</div>
        <div className={styles.cart}>CART</div>
      </div>
    </div>
  );
};

export default Header;
