import { CompanyKeyMetrics } from "../../company"
import RatioList from "../../Component/RatioList/RatioList"
import Table from "../../Component/Table/Table"
import { testIncomeStatementData } from "../../Component/Table/testData"

type Props = {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
    <h1>FinanceProject Design Pag</h1>
    <h2>
        This is FinanceProjects design page. This is where we will keep
        various design aspects of the app.
    </h2>
    <RatioList data={testIncomeStatementData} config={tableConfig}/>
    <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  )
}
export default DesignPage