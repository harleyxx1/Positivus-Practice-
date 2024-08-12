import SectionHeading from "../../../components/SectionHeading"
import { Labels } from "../../../lib/enums"

const Team = () => {
  return (
    <div>
      <SectionHeading title={Labels.TEAM_TITLE} subTitle={Labels.TEAM_SUBTITLE} />
    </div>
  )
}

export default Team