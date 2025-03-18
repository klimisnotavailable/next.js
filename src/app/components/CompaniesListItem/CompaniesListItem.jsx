import StatusLabel from "../StatusLabel/StatusLabel";
import styles from "./CompaniesListItem.module.css";
import logo from "../../../../public/images/shared/companiesLogos/CostcoLogo.png";
import PromotionItem from "../PromotionItem/PromotionItem";
import Link from "next/link";

const CompaniesListItem = ({ data, idx }) => {
  const { category, name, status, promotion, country, joinedAt,avatar } = data;
  const isoDate = new Date(joinedAt);
  const dateOnly = isoDate.toLocaleDateString("uk-UA");
  return (
    <li key={idx}>
      <Link
        href={`companies/${idx}`}
        className={`flex items-center w-full ${styles.item}`}
      >
        <p className={styles.category}>{category}</p>
        <p className={styles.company}>
          <img src={avatar ? avatar : logo.src} className={`${styles.companyLogo}`} width={32} height={32} alt="" />
          {name}
        </p>
        <StatusLabel status={status} style={{"marginRight":"80px"}}></StatusLabel>
        <PromotionItem promotion={promotion} />
        <p className={`w-40 text-center`}>{country}</p>
        <p className={`w-40 text-center`}>{dateOnly}</p>
      </Link>
    </li>
  );
};

export default CompaniesListItem;
