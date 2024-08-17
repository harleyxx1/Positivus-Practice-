import IconButton from "../../../components/IconButton";
import SectionHeading from "../../../components/SectionHeading"
import { ComponentIds } from "../../../lib/enums/ids";
import { CaseStudyType } from "../../../lib/types";

const CaseStudy = () => {
  const listOfCaseStudy: CaseStudyType[] = [{
    id: 0,
    body: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
  }, {
    id: 1,
    body: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
  }, {
    id: 2,
    body: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
  }];

  return (
    <div id={ComponentIds.STUDIES} className="mt-[60px] lg:mt-36">
      <SectionHeading title="Case Studies" subTitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" />
      <div className="flex max-lg:flex-nowrap max-lg:overflow-x-scroll flex-row max-lg:gap-5 lg:bg-customDark lg:p-[60px] lg:rounded-[35px]">
        {listOfCaseStudy.map(item => <div className="flex flex-row max-lg:bg-customDark max-lg:rounded-[35px]">
          <div className="flex flex-col max-lg:min-w-[350px] max-lg:p-10">
            <span className="text-white mb-5">{item.body}</span>
            <IconButton subContainerClassname="gap-1 flex-row-reverse justify-end" textClassName="block text-customGreen text-[20px]" />
          </div>
          {item.id !== listOfCaseStudy.length - 1 &&
            <div className="hidden lg:block w-[1px] bg-white h-full border-r mx-8" />
          }
        </div>)}
      </div>
    </div >
  )
}

export default CaseStudy