"use client";

import StatisticsList from "@/app/components/StatisticsList/StatisticsList";
import SalesDetailsTable from "@/app/components/SalesDetailsTable/SalesDetailsTable";
import CategoriesOfCompanies from "@/app/components/CategoriesOfCompanies/CategoriesOfCompanies";
import CountriesOfCompanies from "@/app/components/CountriesOfCompanies/CountriesOfCompanies";
import PromotionsList from "@/app/components/PromotionsList/PromotionsList";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "@/redux/auth/selectors";

const Page = () => {
  const router = useRouter();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/auth/sign-up");
    }
  }, [isLoggedIn]);

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
