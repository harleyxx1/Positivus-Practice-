import { CompanyType } from "../../../lib/types";
import amazon from "../../../assets/companies/amazon.svg";
import dribble from "../../../assets/companies/dribble.svg";
import hubspot from "../../../assets/companies/hubspot.svg";
import notion from "../../../assets/companies/notion.svg";
import netflix from "../../../assets/companies/netflix.svg";
import zoom from "../../../assets/companies/zoom.svg";

const CompanyList = () => {
  const listOfCompany: CompanyType[] = [{
    id: 0,
    source: amazon
  }, {
    id: 1,
    source: dribble
  }, {
    id: 2,
    source: hubspot
  }, {
    id: 3,
    source: notion
  }, {
    id: 4,
    source: netflix
  }, {
    id: 5,
    source: zoom
  }];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 mt-[60px]">
      {listOfCompany.map(item => <div className="justify-self-center">
        <img className="" src={item.source} />
      </div>)}
    </div>
  )
}

export default CompanyList