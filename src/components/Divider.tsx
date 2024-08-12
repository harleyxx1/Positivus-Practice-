import { cn } from "../lib/utils";

interface DividerProps {
  customDividerClassname?: string;
  horizontal?: boolean;
  value?: number;
}

/**
 * A component that handles division in UI.
 * 
 * @type {Coponent}
 * @returns {React.FC}
 */
const Divider = (props: DividerProps) => {
  const { horizontal = false, customDividerClassname, value = 1 } = props;

  const dividerClassname = cn(horizontal ? `w-full h-[${value}px]` : `h-full w-[${value}px]`, ` bg-black`, customDividerClassname)

  return (
    <div className={dividerClassname} />
  )
}

export default Divider