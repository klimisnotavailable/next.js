"use client";
import styles from "./CompaniesList.module.css";
import CompaniesListItem from "../CompaniesListItem/CompaniesListItem";
import { useSelector } from "react-redux";
import { selectCompanies } from "@/redux/companies/selectors";

const CompaniesList = () => {
  const companiesData = useSelector(selectCompanies);  

  return (
    <div className={`${styles.listContainer} bg-bg-primary`}>
      <div className="flex mb-5">
        <p className={`${styles.category}`}>Category</p>
        <p className={`${styles.company}`}>Company</p>
        <p className={`${styles.status}`}>Status</p>
        <p className={`${styles.promotion}`}>Promotion</p>
        <p className={`${styles.country}`}>Country</p>
        <p className={`${styles.joined}`}>Joined data</p>
      </div>
      <ul className="flex flex-col gap-2">
        {companiesData.map((item,idx)=>{
        return <CompaniesListItem key={item.id} data={item} idx={item.id}/>
      })}
      </ul>
    </div>
  );
};

export default CompaniesList;
