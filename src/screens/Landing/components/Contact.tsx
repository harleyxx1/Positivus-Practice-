import SectionHeading from "../../../components/SectionHeading"
import { ButtonTitles, Labels } from "../../../lib/enums"
import contact from '../../../assets/icons/contact.svg';
import TextButton from "../../../components/TextButton";

const Contact = () => {
  return (
    <div className="mt-[60px] lg:mt-36">
      <SectionHeading customTextClassname="lg:max-w-[320px]" title={Labels.CONTACT_US_TITLE} subTitle={Labels.CONTACT_US_SUBTITLE} />
      <div className="p-[30px] lg:px-[100px] lg:py-[60px] rounded-[35px] bg-customGrey flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row gap-5">
            <div className="flex items-center">
              <input checked id="hi-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-customGreen bg-white border-black focus:ring-customGreen dark:focus:ring-customGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-black" />
              <span className="ms-2 text-[16px] font-medium text-gray-900">{ButtonTitles.SAY_HI}</span>
            </div>
            <div className="flex items-center">
              <input id="qoute-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-customGreen bg-white border-black focus:ring-customGreen dark:focus:ring-customGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-black" />
              <span className="ms-2 text-[16px] font-medium text-gray-900">{ButtonTitles.GET_QOUTE}</span>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-[25px]">
            <div>
              <span className="block mb-2 text-[16px]">{Labels.NAME}</span>
              <input type="text" className="font bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-6 rounded-[15px] dark:focus:ring-customGreen dark:focus:border-customGreen" placeholder={Labels.NAME} required />
            </div>
            <div>
              <span className="block mb-2 text-[16px]">{Labels.EMAIL}</span>
              <input type="text" className="font bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-6 rounded-[15px] dark:focus:ring-customGreen dark:focus:border-customGreen" placeholder={Labels.EMAIL} required />
            </div>
            <div>
              <span className="block mb-2 text-[16px]">{Labels.MESSAGE}</span>
              <input type="text" className="font bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-6 rounded-[15px] dark:focus:ring-customGreen dark:focus:border-customGreen" placeholder={Labels.MESSAGE} required />
            </div>
            <TextButton customContainerClassName="mt-5" customButtonClassName="w-full" buttonText={ButtonTitles.SEND_MESSAGE} />
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <img className="h-[460px]" src={contact} />
        </div>
      </div>
    </div>
  )
}

export default Contact