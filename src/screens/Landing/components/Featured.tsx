import { ButtonTitles, Labels } from "../../../lib/enums"
import featuredImg from '../../../assets/icons/featured_img.svg';
import TextButton from "../../../components/TextButton";

const Featured = () => {
  return (
    <div className="mt-10 lg:flex flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="mb-[10px] text-[40px] lg:text-[60px] xl:text-[80px]">{Labels.FEATURED_HEADER}</h1>
        <img src={featuredImg} className="w-full h-full lg:hidden" />
        <div className="mb-10">
          <span className="text-xl">{Labels.FEATURED_BODY}</span>
        </div>
        <TextButton customButtonClassName="max-lg:flex-1" buttonText={ButtonTitles.BOOK_CONSULTATION} />
      </div>
      <div className="max-lg:hidden flex flex-1">
        <img src={featuredImg} className="w-full h-full lg:block" />
      </div>
    </div>
  )
}

export default Featured