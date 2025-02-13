"use client";

import { useEffect, useState } from "react";
import { getCompany } from "@/utils/axios";
import { usePathname } from "next/navigation";
import CompanyDescr from "@/app/components/CompanyDescr/CompanyDescr";
import CompanyPromotions from "@/app/components/CompanyPromotions/CompanyPromotions";
import AddPromotionsForm from "@/app/components/AddPromotionsForm/AddPromotionsForm";
import AddPromotionModal from "@/app/components/AddPromotionModal/AddPromotionModal";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [company, setCompany] = useState({});
  const router = usePathname();
  const id = router.split("/").pop();

  const openModal = () => {
    setIsOpen(true)
  };

  const closeModal = () => {
    setIsOpen(false)
  };


  useEffect(() => {
    if (id == null) {
      return;
    }

    async function fetchCompanyData(id) {
      try {
        const response = await getCompany(id);
        setCompany(response.data);
      } catch (error) {
        throw new Error(error.response.data);
      }
    }

    fetchCompanyData(id);
  }, [id]);

  return (
    <section className="p-10">
      <AddPromotionsForm openModal={openModal}/>
      <AddPromotionModal modalIsOpen={isOpen} closeModal={closeModal}/>
      <div className="flex gap-5">
        <CompanyDescr data={company} />
        <CompanyPromotions />
      </div>
    </section>
  );
}
