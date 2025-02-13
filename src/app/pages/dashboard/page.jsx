import StatisticsList from "@/app/components/StatisticsList/StatisticsList";
import SalesDetailsTable from "@/app/components/SalesDetailsTable/SalesDetailsTable";
import CategoriesOfCompanies from "@/app/components/CategoriesOfCompanies/CategoriesOfCompanies";
import CountriesOfCompanies from "@/app/components/CountriesOfCompanies/CountriesOfCompanies";
import PromotionsList from "@/app/components/PromotionsList/PromotionsList";
const Page = () => {
  return (
    <section>
      <div className="container flex flex-wrap gap-5">
        <StatisticsList></StatisticsList>
        <SalesDetailsTable></SalesDetailsTable>
        <CategoriesOfCompanies></CategoriesOfCompanies>
        <CountriesOfCompanies></CountriesOfCompanies>
        <PromotionsList></PromotionsList>
      </div>
    </section>
  );
};

export default Page;
