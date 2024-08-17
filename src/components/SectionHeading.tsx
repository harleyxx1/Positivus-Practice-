import { cn } from "../lib/utils";
import TitleText from "./TitleText";

interface SectionHeadingProps {
  title: string;
  subTitle: string;
  customContainerClassName?: string;
  customTextClassname?: string;
}

/**
 * A custom componet for showing headers in every
 * section of the page.
 * 
 * @param {SectionHeadingProps} props - The props passed to this component.
 * @type {Component}
 * @returns {React.FC}
 */
const SectionHeading = (props: SectionHeadingProps) => {
  const { subTitle, title, customContainerClassName, customTextClassname } = props;

  const containerClassName = cn("flex flex-col mb-10 gap-[30px] lg:flex-row lg:mb-16", customContainerClassName);
  const textClassname = cn("lg:max-w-[580px] text-center lg:text-start", customTextClassname)

  return (
    <div className={containerClassName}>
      <div className="flex max-lg:justify-center">
        <TitleText title={title} />
      </div>
      <p className={textClassname}>{subTitle}</p>
    </div>
  )
}

export default SectionHeading