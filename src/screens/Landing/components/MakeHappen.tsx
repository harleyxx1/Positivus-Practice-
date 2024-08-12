import TextButton from "../../../components/TextButton"
import { ButtonTitles } from "../../../lib/enums"

const MakeHappen = () => {
  return (
    <div className="flex flex-row p-12 bg-customGrey mt-[70px] mb-[60px] rounded-[35px]">
      <div className="flex flex-1 border flex-col">
        <h2 className="mb-5">Let’s make things happen</h2>
        <div className="mb-5 max-w-[450px]">
          <span>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </span>
        </div>
        <div className="max-lg:flex max-lg:flex-1">
          <TextButton className="max-lg:flex-1">{ButtonTitles.GET_FREE_PERSONAl}</TextButton>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-1">
      </div>
    </div>
  )
}

export default MakeHappen