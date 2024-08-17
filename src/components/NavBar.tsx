import logoGreen from '../assets/icons/logo_green.svg';
import TextButton from './TextButton';
import burger from '../assets/icons/burger.svg';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { ListOfButtons } from '../lib/enums/nav';

/**
 * A component that shows the nav bar.
 * 
 * @type {Component}
 * @returns {React.FC}
 */
const NavBar = () => {
  const [open, setOpen] = useState(false);

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
          {ListOfButtons.map(item =>
            item.id === ListOfButtons.length - 1 ?
              <TextButton customButtonClassName="max-lg:flex-1" buttonText={item.name} />
              :
              (
                <button onClick={() => {
                  const theElement = document.getElementById(item.componentId);
                  theElement?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }} type='button' className='font-normal text-xl transition-all px-2 max-lg:py-4 hover:bg-customDark hover:text-white'>{item.name}</button>
              )
          )}
        </div>
      </div >
    </nav >
  )
}

export default NavBar