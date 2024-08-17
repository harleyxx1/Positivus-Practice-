import { cn } from "../lib/utils";
import { IconButtonType } from "../lib/enums";

interface TextButtonProps {
  onClick?: () => void;
  customContainerClassName?: string;
  customButtonClassName?: string;
  customTextClassName?: string;
  buttonText: string;
  type?: IconButtonType.DARK | IconButtonType.LIGHT
}

/**
 * A custom button that shows text only. 
 *
 * @param {TextButtonProps & PropsWithChildren} props - The props passed to this component. 
 * @returns 
 */
const TextButton = (props: TextButtonProps) => {
  const { onClick, customContainerClassName, customButtonClassName, customTextClassName, buttonText, type = IconButtonType.DARK } = props;

  const containerClassName = cn('max-lg:flex max-lg:flex-1', customContainerClassName);
  const buttonClassName = cn('py-4 rounded-[14px] px-8 bg-customDark text-white text-xl transition hover:bg-customGreen hover:text-customDark', type === IconButtonType.LIGHT && 'text-black bg-customGreen hover:bg-customGrey', customButtonClassName);
  const textClassname = cn(customTextClassName);

  return (
    <div className={containerClassName}>
      <button onClick={onClick} className={buttonClassName}>
        <span className={textClassname}>{buttonText}</span>
      </button>
    </div>
  )
}

export default TextButton