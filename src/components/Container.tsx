import { PropsWithChildren } from "react"
import { cn } from "../lib/utils";

interface ContainerProps {
  className?: string;
}

/**
 * A custom container component.
 * 
 * @param {ContainerProps & PropsWithChildren} props - The props passed to this component.
 * @type {Component}
 * @returns {React.FC}
 */
const Container = (props: ContainerProps & PropsWithChildren) => {
  const { className } = props;

  const containerClassName = cn('py-[30px] sm:container sm:mx-auto max-sm:px-5 lg:py-[60px]', className);

  return (
    <div className={containerClassName}>{props.children}</div>
  )
}

export default Container