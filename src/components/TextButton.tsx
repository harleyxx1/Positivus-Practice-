import { PropsWithChildren } from "react"
import { cn } from "../lib/utils";

interface TextButtonProps {
  customContainerClassName?: string;
  customButtonClassName?: string;
  customTextClassName?: string;
  buttonText: string;
}

/**
 * A custom button that shows text only. 
 *
 * @param {TextButtonProps & PropsWithChildren} props - The props passed to this component. 
 * @returns 
 */
const TextButton = (props: TextButtonProps) => {
  const { customContainerClassName, customButtonClassName, customTextClassName, buttonText } = props;

  const containerClassName = cn('max-lg:flex max-lg:flex-1', customContainerClassName);
  const buttonClassName = cn('py-4 rounded-[14px] px-8 bg-customDark text-white text-xl transition hover:bg-customGreen hover:text-customDark', customButtonClassName);
  const textClassname = cn(customTextClassName);

  return (
    <div className={containerClassName}>
      <button className={buttonClassName}>
        <span className={textClassname}>{buttonText}</span>
      </button>
    </div>
  )
}

export default TextButton