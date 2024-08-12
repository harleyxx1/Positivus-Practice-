import SectionHeading from "../../../components/SectionHeading"
import WorkingProcessCard from "../../../components/WorkingProcessCard";
import { Labels } from "../../../lib/enums"
import { WorkingProcessType } from "../../../lib/types";

const WorkingProcess = () => {
  const listOfWorkingProcess: WorkingProcessType[] = [
    {
      id: 0,
      title: 'Consultation',
      body: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      id: 1,
      title: 'Research and Strategy Development',
      body: 'Research and Strategy Development involves gathering and analyzing information to make informed decisions and create effective plans. This process includes identifying key trends, understanding market dynamics, and evaluating competitive landscapes. By synthesizing data and insights, organizations can develop strategic approaches that align with their goals and drive success. This approach ensures that decisions are evidence-based and that strategies are both relevant and adaptable to changing conditions.'
    },
    {
      id: 2,
      title: 'Implementation',
      body: 'Implementation is the process of putting a plan or strategy into action. It involves executing the steps outlined in the strategy, coordinating resources, and managing tasks to achieve the desired outcomes. Effective implementation requires clear communication, monitoring progress, and making adjustments as needed to ensure that goals are met and the plan is successfully executed.'
    },
    {
      id: 3,
      title: 'Monitoring and Optimization',
      body: 'Monitoring and Optimization involves continuously tracking performance and outcomes to ensure that goals are being met efficiently. This process includes assessing metrics, identifying areas for improvement, and making data-driven adjustments to enhance effectiveness. By regularly reviewing and refining strategies, organizations can optimize processes, maximize results, and adapt to changing conditions.'
    },
    {
      id: 4,
      title: 'Reporting and Communication',
      body: 'Reporting and Communication involves presenting and sharing information about performance, progress, and outcomes with stakeholders. This process includes preparing clear and accurate reports, delivering key insights, and ensuring transparent dialogue. Effective reporting and communication help keep everyone informed, facilitate decision-making, and support collaboration by conveying essential updates and addressing any issues or achievements.'
    },
    {
      id: 5,
      title: 'Continual Improvement',
      body: 'Continual Improvement is an ongoing process of enhancing products, services, or processes through regular evaluation and incremental changes. It involves identifying areas for enhancement, implementing improvements, and assessing their impact. By fostering a culture of constant refinement and feedback, organizations can drive greater efficiency, adapt to evolving needs, and achieve sustained growth and excellence.'
    }
  ];

  return (
    <div className="mt-[60px] lg:mt-36">
      <SectionHeading title={Labels.WORKING_PROGRESS_TITLE} subTitle={Labels.WORKING_PROGRESS_SUBTITLE} customTextClassname="lg:max-w-[300px]" />
      <div className="flex flex-col gap-7">
        {listOfWorkingProcess.map(item => <WorkingProcessCard item={item} />)}
      </div>
    </div>
  )
}

export default WorkingProcess