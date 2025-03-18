"use client";

import StatisticsList from "@/app/components/StatisticsList/StatisticsList";
import SalesDetailsTable from "@/app/components/SalesDetailsTable/SalesDetailsTable";
import CategoriesOfCompanies from "@/app/components/CategoriesOfCompanies/CategoriesOfCompanies";
import CountriesOfCompanies from "@/app/components/CountriesOfCompanies/CountriesOfCompanies";
import PromotionsList from "@/app/components/PromotionsList/PromotionsList";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/auth/sign-up");
    }
  }, []);

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
