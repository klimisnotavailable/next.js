import styles from "./SalesDetailsItem.module.css";

const SalesDetailsItem = ({data}) => {
    const {company, sold, income, logo} = data;
    return (
        <tr className={`${styles.row}`}>
            <td className={`${styles.companyData}`}><img className={`${styles.companyLogo}`} src={logo} alt="" width={20} height={20}/>{company}</td>
            <td className={`${styles.soldData} text-center`}>{sold}</td>
            <td className="text-center">{income}</td>
        </tr>
    )
};

export default SalesDetailsItem;