import styles from "./PromotionsListItem.module.css";

const PromotionsListItem = ({data}) => {
  const { company, name, income, companyLogo } = data;
  return (
    <tr className={`${styles.row}`}>
      <td className={`${styles.companyData}`}>
        <img
          className={`${styles.companyLogo}`}
          src={companyLogo.src}
          alt=""
          width={20}
          height={20}
        />
        {company}
      </td>
      <td className={`${styles.nameData} text-center`}>{name}</td>
      <td className="text-center">{income}</td>
    </tr>
  );
};

export default PromotionsListItem;
