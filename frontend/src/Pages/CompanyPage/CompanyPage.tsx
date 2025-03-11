import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Component/Sidebar/Sidebar";
import CompanyDashboard from "../../Component/CompanyDashboard/CompanyDashboard";
import Tile from "../../Component/Tile/Tile";
import Spinner from "../../Component/Spinner/Spinner";


type Props = {};

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      if (typeof result === "string") {
        setError(result);
      } else {
        setCompany(result[0]);
      }
    };
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
        <Sidebar/>
        <CompanyDashboard ticker={ticker!}>
          <Tile mainTitle="Company Name" subTitle={company.companyName}></Tile>
          <Tile mainTitle="Price" subTitle={company.price.toString()}></Tile>
          <Tile mainTitle="Sector" subTitle={company.sector}></Tile>
          <Tile mainTitle="DCF" subTitle={company.dcf.toString()}></Tile>
          <p className="bg-white shadow rounded text-medium text-gray-900 p-3 mt-1 m-4">
            {company.description}
          </p>
        </CompanyDashboard>
      </div>
      ): (
        <Spinner/>
      )}
    </>
  );
};

export default CompanyPage;