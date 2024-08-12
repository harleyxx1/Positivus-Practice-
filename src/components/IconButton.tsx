import { IconButtonType } from '../lib/enums';
import arrowGreenIcon from '../assets/icons/arrow_green.svg';
import arrowWhiteIcon from '../assets/icons/arrow_white.svg';
import { cn } from '../lib/utils';

interface IconButtonProps {
  type?: IconButtonType.LIGHT | IconButtonType.DARK;
  iconHasBg?: boolean;
  containerClassname?: string;
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
    iconHasBg = false,
    type = IconButtonType.DARK
  } = props;

  const iconClassname = cn('p-3', iconHasBg && `rounded-[24px] ${type === IconButtonType.DARK ? 'bg-customDark' : 'bg-customGrey'}`)
  const iconTextClassName = cn('hidden text-xl min-[560px]:block', type === IconButtonType.DARK ? 'text-black' : 'text-white')

  return (
    <button className={containerClassname}>
      <div className='flex flex-row items-center gap-4'>
        <div className={iconClassname}>
          <img src={type === IconButtonType.DARK ? arrowGreenIcon : arrowWhiteIcon} />
        </div>
        <span className={iconTextClassName}>Learn More</span>
      </div>
    </button>
  )
}

export default IconButton