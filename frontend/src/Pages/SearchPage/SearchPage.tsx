import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import CardList from "../../Component/CardList/CardList"
import Navbar from "../../Component/Navbar/Navbar"
import ListPortfolio from "../../Component/Portfolio/ListPortfolio/ListPortfolio"
import Search from "../../Component/Search/Search"
import { CompanySearch } from "../../company"
import { searchCompanies } from "../../api"
import { portfolioGet } from "../../Models/Portfolio"
import { portfolioAddApi, portfolioDeleteApi, portfolioGetApi } from "../../Services/PortfolioService"
import { data } from "react-router"
import { toast } from "react-toastify"

type Props = {}
const SearchPage = (props: Props) => {


    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<portfolioGet[] | null>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
    };

    useEffect(() => {
      getPortfolio();
    },[])

    const getPortfolio = () => {
      portfolioGetApi()
      .then((res) => {
        if(res?.data) {
          setPortfolioValues(res?.data);
        }
      }).catch((e) =>{
        toast.warning("Could not get portfolio values!")
      });
    };
  
    const onPortfolioCreate = (e :any) => {
      e.preventDefault();
      portfolioAddApi(e.target[0].value)
      .then((res) => {
        if(res?.status === 204){
          toast.success("stock added to portfolio!")
          getPortfolio();
        }
      }).catch((e) =>{
        toast.warning("Could not create Portfolio!")
      })
    };



  
    const onPortfolioDelete = (e:any) => {
      e.preventDefault();
      portfolioDeleteApi(e.target[0].value).then((res) => {
        if(res?.status == 200){
          toast.success("Portfolio deleted successfully")
          getPortfolio();
        }
      })
    };
    
    const onSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log(result)
    };
  
    useEffect(() => {
      console.log("Updated searchResult:", searchResult);
    }, [searchResult]);
  return (
    <>
    <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
    <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete ={onPortfolioDelete}/>
    <CardList searchResult ={searchResult} onPortfolioCreate={onPortfolioCreate} />
    {serverError && <h1>{serverError}</h1>}
    </>
  )
}
export default SearchPage