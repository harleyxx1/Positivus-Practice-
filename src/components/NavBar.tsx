import logoGreen from '../assets/icons/logo_green.svg';
import { ButtonTitles } from '../lib/enums';
import { NavBarButtonType } from '../lib/types';
import TextButton from './TextButton';
import burger from '../assets/icons/burger.svg';

/**
 * A component that shows the nav bar.
 * 
 * @type {Component}
 * @returns {React.FC}
 */
const NavBar = () => {
  const listOfButtons: NavBarButtonType[] = [{
    id: 0,
    name: ButtonTitles.ABOUT_US
  }, {
    id: 1,
    name: ButtonTitles.SERVICES
  }, {
    id: 2,
    name: ButtonTitles.USE_CASES
  }, {
    id: 3,
    name: ButtonTitles.PRICING
  }, {
    id: 4,
    name: ButtonTitles.BLOG
  }, {
    id: 5,
    name: ButtonTitles.REQUEST_QOUTE
  }];

  return (
    <nav className='flex flex-column justify-between'>
      <div className='max-lg:flex max-lg:flex-1 max-lg:justify-between max-lg:flex-row'>
        <img src={logoGreen} />
        <button className='lg:hidden'>
          <img src={burger} />
        </button>
      </div>
      <div className='hidden lg:flex lg:gap-7 xl:gap-10'>
        {listOfButtons.map(item =>
          item.id === listOfButtons.length - 1 ?
            <TextButton>{item.name}</TextButton>
            :
            (
              <button type='button' className='font-normal text-xl'>{item.name}</button>
            )
        )}
      </div>
    </nav>
  )
}

export default NavBar