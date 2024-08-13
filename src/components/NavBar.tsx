import logoGreen from '../assets/icons/logo_green.svg';
import { ButtonTitles } from '../lib/enums';
import { NavBarButtonType } from '../lib/types';
import TextButton from './TextButton';
import burger from '../assets/icons/burger.svg';
import Container from './Container';
import { cn } from '../lib/utils';
import { useState } from 'react';

/**
 * A component that shows the nav bar.
 * 
 * @type {Component}
 * @returns {React.FC}
 */
const NavBar = () => {
  const [open, setOpen] = useState(false);

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

  const onClickBurger = () => {
    setOpen(!open);
  }

  const collapsibleContainer = cn('max-lg:transition-all max-lg:overflow-hidden max-lg:ease-in-out max-lg:max-h-0 max-lg:opacity-0 max-lg:bg-customGreen max-lg:absolute max-lg:left-0 max-lg:top-[100px] max-lg:right-0 max-lg:opacity-0', open && 'max-lg:max-h-screen max-lg:opacity-1')

  return (
    <nav className='overflow-hidden ease-linear flex max-lg:flex-col lg:flex-row lg:justify-between'>
      <div className='max-lg:flex max-lg:flex-1 max-lg:justify-between max-lg:flex-row'>
        <img src={logoGreen} />
        <button onClick={onClickBurger} className='lg:hidden'>
          <img src={burger} />
        </button>
      </div>
      <div className={collapsibleContainer}>
        <div className='sm:container sm:mx-auto flex max-lg:py-5 max-lg:flex-col lg:flex-row lg:gap-7 max-lg:gap-2 xl:gap-10'>
          {listOfButtons.map(item =>
            item.id === listOfButtons.length - 1 ?
              <TextButton customButtonClassName="max-lg:flex-1" buttonText={item.name} />
              :
              (
                <button type='button' className='font-normal text-xl transition-all px-2 max-lg:py-4 hover:bg-customDark hover:text-white'>{item.name}</button>
              )
          )}
        </div>
      </div >
    </nav >
  )
}

export default NavBar