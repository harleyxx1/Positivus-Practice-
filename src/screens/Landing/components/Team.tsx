import SectionHeading from "../../../components/SectionHeading"
import { ButtonTitles, Labels } from "../../../lib/enums"
import { TeamMemberType } from "../../../lib/types"
import pic1 from '../../../assets/team/pic1.svg';
import pic2 from '../../../assets/team/pic2.svg';
import pic3 from '../../../assets/team/pic3.svg';
import pic4 from '../../../assets/team/pic4.svg';
import pic5 from '../../../assets/team/pic5.svg';
import pic6 from '../../../assets/team/pic6.svg';
import linkedInGreen from '../../../assets/icons/linkedin_green.svg'
import Icon from "../../../components/Icon";
import Divider from "../../../components/Divider";
import TextButton from "../../../components/TextButton";

const Team = () => {
  const listOfTeamMember: TeamMemberType[] = [
    {
      id: 0,
      image: pic1,
      name: 'John Smith',
      position: 'CEO and Founder',
      description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
    }, {
      id: 1,
      image: pic2,
      name: 'Jane Doe',
      position: 'Director of Operations',
      description: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
    }, {
      id: 2,
      image: pic3,
      name: 'Michael Brown',
      position: 'Senior SEO Specialist',
      description: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
    }, {
      id: 3,
      image: pic4,
      name: 'Emily Johnson',
      position: 'PPC Manager',
      description: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
    }, {
      id: 4,
      image: pic5,
      name: 'Brian Williams',
      position: 'Social Media Specialist',
      description: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
    }, {
      id: 5,
      image: pic6,
      name: 'Sarah Kim',
      position: 'Content Creator',
      description: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries'
    },
  ]

  return (
    <div className="mt-[60px] lg:mt-36 flex flex-1 flex-col">
      <SectionHeading title={Labels.TEAM_TITLE} subTitle={Labels.TEAM_SUBTITLE} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {
          listOfTeamMember.map(item => <div className="p-10 flex flex-1 flex-col border border-customDark rounded-[35px] shadow-[0_3px_0_0] bg-customGrey">
            <div className="flex h-[100px]">
              <img className="h-[100px] w-[100px]" src={item.image} />
              <div className="flex flex-1 ml-5 flex-col justify-end">
                <span className="text-[20px] font-bold">{item.name}</span>
                <span>{item.position}</span>
              </div>
              <Icon source={linkedInGreen} />
            </div>
            <div>
              <Divider horizontal customDividerClassname="my-[15px]" />
              <span>{item.description}</span>
            </div>
          </div>)
        }
      </div>
      <div className="mt-10">
        <TextButton customContainerClassName='md:flex justify-end' customButtonClassName="max-md:flex-1" buttonText={ButtonTitles.SEE_ALL_TEAM} />
      </div>

    </div>
  )
}

export default Team