import styles from "./CompanyPromotionItem.module.css";

const CompanyPromotionItem = ({ data }) => {
  return (
    <li className={`bg-bg-primary ${styles.item}`}>
      <div className={`${styles.imgContainer}`}></div>
      <div className="p-5 ">
        <h3 className={`mb-3`}>{data.head}</h3>
        <p>{data.description}</p>
      </div>
    </li>
  );
};

export default CompanyPromotionItem;
