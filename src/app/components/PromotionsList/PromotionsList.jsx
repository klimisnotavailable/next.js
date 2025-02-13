import styles from "./PromotionsList.module.css";
import data from "../PromotionsListItem/data";
import PromotionsListItem from "../PromotionsListItem/PromotionsListItem";

const PromotionsList = () => {
    return <div className={`${styles.promotionsContainer}`}>
        <h2 className={`${styles.tableName}`}>Promotions</h2>
        <table>
        <tbody>
          <tr className={`${styles.tableHeads}`}>
            <th className={`${styles.headCompany} ${styles.tableHead}`}>
              Company
            </th>
            <th className={`${styles.tableHead} ${styles.headName} bg-brand-primary`}>Name</th>
            <th className={`${styles.tableHead} bg-brand-secondary`}>%</th>
          </tr>
          {data.map((item,idx) => {
            return (
                <PromotionsListItem data={item} key={idx} />
            );
          })}
        </tbody>
      </table>

    </div>
};

export default PromotionsList;