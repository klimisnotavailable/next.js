import CompanyPromotionItem from "../CompanyPromotionItem/CompanyPromotionItem";
import data from "./data";

const CompanyPromotions = () => {
  return <ul className="flex flex-wrap h-max gap-5">{data.map((item,idx)=>{
    return <CompanyPromotionItem key={idx} data={item}/>
  })}</ul>;
};
export default CompanyPromotions;
