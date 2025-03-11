import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import CardList from "../../Component/CardList/CardList"
import Navbar from "../../Component/Navbar/Navbar"
import ListPortfolio from "../../Component/Portfolio/ListPortfolio/ListPortfolio"
import Search from "../../Component/Search/Search"
import { CompanySearch } from "../../company"
import { searchCompanies } from "../../api"

type Props = {}
const SearchPage = (props: Props) => {


    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");
  
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e);
    };
  
    const onPortfolioCreate = (e :any) => {
      e.preventDefault();
      const exists = portfolioValues.find((value) => value === e.target[0].value);
      if (exists) return;
      const updatedPortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolio);
    }
  
    const onPortfolioDelete = (e:any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
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
    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete ={onPortfolioDelete}/>
    <CardList searchResult ={searchResult} onPortfolioCreate={onPortfolioCreate} />
    {serverError && <h1>{serverError}</h1>}
    </>
  )
}
export default SearchPage