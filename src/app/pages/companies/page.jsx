"use client";

import CompaniesForm from "@/app/components/CompaniesForm/CompaniesForm";
import CompaniesList from "@/app/components/CompaniesList/CompaniesList";
import AddCompanyModal from "@/app/components/AddCompanyModal/AddCompanyModal";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCompanies } from "@/redux/companies/operations";
import { selectIsLoading } from "@/redux/companies/selectors";
import Loading from "../Loading";

export default function Page() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = dispatch(getAllCompanies());
        return response.data;
      } catch (error) {
        return error.message;
      }
    };

    fetchCompanies();
  }, [dispatch]);

  return (
    <>
      <CompaniesForm openModal={openModal}></CompaniesForm>
      {isLoading ? <Loading /> : <CompaniesList />}
      <AddCompanyModal
        modalIsOpen={isOpen}
        closeModal={closeModal}
      ></AddCompanyModal>
    </>
  );
}
