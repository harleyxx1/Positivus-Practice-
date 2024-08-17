import { cn } from "../lib/utils";

interface TitleTextProps {
  title: string;
  customTextClassName?: string;
}

/**
 * A custom component show casing the title.
 * 
 * @param {TitleTextProps} props - The props passed to this component.
 * @returns 
 */
const TitleText = (props: TitleTextProps) => {
  const { title, customTextClassName } = props;

  const textClassName = cn(customTextClassName)
  return (
    <div className="bg-customGreen justify-self-center px-2 rounded-lg">
      <h1 className={textClassName}>{title}</h1>
    </div>
  )
}

export default TitleText