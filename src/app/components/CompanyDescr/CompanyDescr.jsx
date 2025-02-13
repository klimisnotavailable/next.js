import styles from "./CompanyDescr.module.css";
import StatusLabel from "../StatusLabel/StatusLabel";

const CompanyDescr = ({ data }) => {
  const { avatar, name, country, category, isActive, joinedAt, promotion } =
    data;

  const isoDate = new Date(joinedAt);
  const dateOnly = isoDate.toLocaleDateString("uk-UA");

  return (
    <article className={`${styles.article}`}>
      <div className={`${styles.mainInfo} flex flex-col items-center gap-5`}>
        <img className={`${styles.companyLogo}`} src={avatar} alt="" />
        <p className="text-text-light">{name}</p>
        <StatusLabel status={isActive} />
      </div>
      <div className={`${styles.detailInfo}`}>
        <h3 className={`mb-5 ${styles.aboutCompany}`}>About company</h3>
        <div className={`flex flex-col gap-3 ${styles.categories}`}>
          <p>Category: {category}</p>
          <p>Country: {country}</p>
          <p>Joined data: {dateOnly}</p>
        </div>
        <p className={`${styles.companyDescription}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla
          dolor totam aperiam? Tenetur natus pariatur commodi? Quis, sint hic!
        </p>
      </div>
    </article>
  );
};

export default CompanyDescr;
