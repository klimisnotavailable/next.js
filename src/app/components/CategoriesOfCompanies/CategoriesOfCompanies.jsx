import styles from "./CategoriesOfCompanies.module.css";
import data from "./data";
import CompanyItem from "../CompanyItem/CompanyItem";

const CategoriesOfCompanies = () => {
    return (
        <div className={`${styles.listContainer}`}>
            <h2 className={`${styles.listName}`}>Categories of companies</h2>
            <ul className="flex gap-3 flex-wrap">
                {
                    data.map((item,idx)=>{
                        return (
                            <CompanyItem key={idx} data={item}/>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default CategoriesOfCompanies;