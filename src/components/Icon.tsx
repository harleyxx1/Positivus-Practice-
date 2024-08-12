import { cn } from "../lib/utils";

interface IconProps {
  source: string
  customContainerClassname?: string;
  customImageClassName?: string;
}

const Icon = (props: IconProps) => {
  const {
    source,
    customContainerClassname,
    customImageClassName
  } = props;

  const containerClassname = cn('h-[40px] w-[40px] rounded-[20px] bg-customDark flex justify-center items-center', customContainerClassname);
  const imageClassname = cn('h-[20px] w-[20]', customImageClassName);

  return (
    <div className={containerClassname}>
      <img className={imageClassname} src={source} />
    </div>
  )
}

export default Icon