import styles from "./SalesDetailsTable.module.css";
import data from "../SalesDetailsItem/data";
import SalesDetailsItem from "../SalesDetailsItem/SalesDetailsItem";

const SalesDetailsTable = () => {
  return (
    <section className={`${styles.salesSection}`}>
      <h2 className={`${styles.tableName}`}>Sales details</h2>
      <div className={`${styles.tableContainer}`}>
        <table className={`${styles.table}`}>
          <tbody className={`${styles.tableBody}`}>
            <tr className={`${styles.tableHeads}`}>
              <th className={`${styles.headCompany} ${styles.tableHead}`}>
                Company
              </th>
              <th className={`${styles.tableHead} bg-brand-primary`}>Sold</th>
              <th className={`${styles.tableHead} bg-brand-secondary`}>
                Income
              </th>
            </tr>
            {data.map((item, idx) => {
              return <SalesDetailsItem data={item} key={idx} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SalesDetailsTable;

// ${styles.tableContainer}