import { PropsWithChildren } from "react"
import { cn } from "../lib/utils";

interface TextButtonProps {
  className?: string;
}

/**
 * A custom button that shows text only. 
 *
 * @param {TextButtonProps & PropsWithChildren} props - The props passed to this component. 
 * @returns 
 */
const TextButton = (props: TextButtonProps & PropsWithChildren) => {
  const { className, children } = props;

  const textButtonClassName = cn('py-4 rounded-[14px] px-8 bg-customDark text-white text-xl transition hover:bg-customGreen hover:text-customDark', className);
  return (
    <button className={textButtonClassName}>{children}</button>
  )
}

export default TextButton