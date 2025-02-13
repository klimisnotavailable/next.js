import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ idx, position, data }) => {
  return (
    <li key={idx} className={`${styles.item}`}>
      <p className={`${styles.position}`}>{position}</p>
      <p className={`${styles.data}`}>{data}</p>
    </li>
  );
};

export default StatisticsItem;
