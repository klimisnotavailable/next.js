import styles from "./CompanyItem.module.css";

const CompanyItem = ({data}) => {
    return <li  className={`${styles.item}`}>
        <p className={`${styles.products}`}>products</p>
        <p className={`text-text-light ${styles.data}`}>{data.amount}</p>
    </li>
};

export default CompanyItem;