import IconButton from "../../../components/IconButton";
import first from "../../../assets/services/search_engine.svg"
import second from "../../../assets/services/pcc_advertising.svg"
import third from "../../../assets/services/social_marketing.svg"
import fourth from "../../../assets/services/email_marketing.svg"
import fifth from "../../../assets/services/content_creation.svg"
import sixth from "../../../assets/services/analytics_tracking.svg"
import SectionHeading from "../../../components/SectionHeading";
import { IconButtonType, Labels } from "../../../lib/enums";
import { ServicesType } from "../../../lib/types";
import { cn } from "../../../lib/utils";

const Services = () => {
  const listOfServices: ServicesType[] = [{
    id: 0,
    name: Labels.SERVICES_FIRST_TITLE,
    icon: first,
    bgColor: 'bg-customGrey',
    textBgColor: 'bg-customGreen',
    textColor: 'text-customDark',
    iconType: IconButtonType.DARK
  }, {
    id: 1,
    icon: second,
    name: Labels.SERVICES_SECOND_TITLE,
    bgColor: 'bg-customGreen',
    textBgColor: 'bg-customGrey',
    textColor: 'text-customGrey',
    iconType: IconButtonType.DARK
  }, {
    id: 2,
    icon: third,
    name: Labels.SERVICES_THIRD_TITLE,
    bgColor: 'bg-customDark',
    textBgColor: 'bg-customGreen',
    textColor: 'text-customDark',
    iconType: IconButtonType.LIGHT
  }, {
    id: 3,
    icon: fourth,
    name: Labels.SERVICES_FOURTH_TITLE,
    bgColor: 'bg-customGrey',
    textBgColor: 'bg-customGreen',
    textColor: 'text-customDark',
    iconType: IconButtonType.DARK
  }, {
    id: 4,
    icon: fifth,
    name: Labels.SERVICES_FIFTH_TITLE,
    bgColor: 'bg-customGreen',
    textBgColor: 'bg-customGrey',
    textColor: 'text-customGrey',
    iconType: IconButtonType.DARK
  }, {
    id: 5,
    icon: sixth,
    name: Labels.SERVICES_SIXTH_TITLE,
    bgColor: 'bg-customDark',
    textBgColor: 'bg-customGreen',
    textColor: 'text-customDark',
    iconType: IconButtonType.LIGHT
  }];

  return (
    <div className="mt-[60px] lg:mt-36">
      <SectionHeading title={Labels.SERVICES_TITLE} subTitle={Labels.SERVICES_SUBTITLE} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {listOfServices.map(item => {
          const containerClassName = cn('border border-customDark p-12 rounded-[35px] shadow-[0_3px_0_0]', item.bgColor);
          const textTitleClassName = cn('font-bold text-2xl px-1 rounded-md', item.textBgColor);
          const splittedText = item.name.split(' ');
          const splittedTextLength = splittedText.length;
          const firstText = splittedTextLength === 1 ? '' : [...splittedText].splice(0, splittedText.length - 1).join(" ");
          const lastText = splittedText[splittedTextLength - 1];
          return (
            <div className={containerClassName}>
              <div className="flex flex-col">
                <div>
                  <span className={textTitleClassName}>{firstText}</span>
                </div>
                <div>
                  <span className={textTitleClassName}>{lastText}</span>
                </div>
              </div>
              <div className="flex flex-row justify-between items-end">
                <IconButton type={item.iconType} />
                <img className="max-w-[210px] max-h-[170px]" src={item.icon} />
              </div>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default Services