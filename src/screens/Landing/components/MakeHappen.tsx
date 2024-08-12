import TextButton from "../../../components/TextButton";
import { ButtonTitles, Labels } from "../../../lib/enums";
import makeHappen from "../../../assets/icons/make_happen.svg";

const MakeHappen = () => {
  return (
    <div className="flex flex-row p-12 bg-customGrey mt-[70px] mb-[60px] rounded-[35px]">
      <div className="flex flex-1 flex-col">
        <h2 className="mb-5">{Labels.MAKE_HAPPEN_TITLE}</h2>
        <div className="mb-5 max-w-[450px]">
          <span>
            {Labels.MAKE_HAPPEN_SUBTITLE}
          </span>
        </div>
        <TextButton className="max-lg:flex-1">{ButtonTitles.GET_FREE_PERSONAl}</TextButton>
      </div>
      <div className="relative hidden lg:flex lg:flex-1 justify-end">
        <div className="absolute top-[-70px] xl:top-[-100px]">
          <img className="w-[340px] xl:w-[400px]" src={makeHappen} />
        </div>
      </div>
    </div>
  )
}

export default MakeHappen