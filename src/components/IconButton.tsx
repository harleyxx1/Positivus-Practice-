import { ButtonTitles, IconButtonType } from '../lib/enums';
import arrowGreenIcon from '../assets/icons/arrow_green.svg';
import arrowWhiteIcon from '../assets/icons/arrow_white.svg';
import { cn } from '../lib/utils';
import { ClassNameValue } from 'tailwind-merge';
import Icon from './Icon';

interface IconButtonProps {
  type?: IconButtonType.LIGHT | IconButtonType.DARK;
  containerClassname?: React.HTMLProps<HTMLElement>["className"];
  subContainerClassname?: React.HTMLProps<HTMLElement>["className"];
  iconClassname?: React.HTMLProps<HTMLElement>["className"];
  textClassName?: React.HTMLProps<HTMLElement>["className"];
}

/**
 * A custom button for icon with text.
 * 
 * @param {IconButtonProps} props - The props passed to this component.
 * @type {Components}
 * @returns {React.FC}
 */
const IconButton = (props: IconButtonProps) => {
  const {
    containerClassname,
    subContainerClassname,
    iconClassname,
    textClassName,
    type = IconButtonType.DARK
  } = props;

  const icClassname = cn(type === IconButtonType.DARK ? 'bg-customDark' : 'bg-customGrey', iconClassname);
  const icTextClassName = cn('hidden text-xl min-[560px]:block', type === IconButtonType.DARK ? 'text-black' : 'text-white', textClassName);
  const icSubContainerClassname = cn('flex flex-row items-center gap-4', subContainerClassname);

  return (
    <button className={containerClassname}>
      <div className={icSubContainerClassname}>
        <Icon customContainerClassname={icClassname} source={type === IconButtonType.DARK ? arrowGreenIcon : arrowWhiteIcon} />
        <span className={icTextClassName}>{ButtonTitles.LEARN_MORE}</span>
      </div>
    </button>
  )
}

export default IconButton