import styles from "./CompanyItem.module.css";

const CompanyItem = ({data,key}) => {
    return <li key={key} className={`${styles.item}`}>
        <p className={`${styles.products}`}>products</p>
        <p className={`text-text-light ${styles.data}`}>{data.amount}</p>
    </li>
};

export default CompanyItem;