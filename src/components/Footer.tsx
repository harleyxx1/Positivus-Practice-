import logoWhite from '../assets/icons/logo_white.svg'
import { ButtonTitles, IconButtonType, Labels } from '../lib/enums';
import { NavBarButtonType } from '../lib/types';
import TextButton from './TextButton';
import TitleText from './TitleText';
import linkedinBlack from '../assets/icons/linkedin_black.svg';
import fbBlack from '../assets/icons/fb_black.svg';
import twitterBlack from '../assets/icons/twitter_black.svg';
import Divider from './Divider';

const Footer = () => {
  const email = 'info@positivus.com';
  const contact = '555-567-8901';
  const address = `1234 Main St\nMoonstone City, Stardust State 12345`;

  const listOfButtons: NavBarButtonType[] = [{
    id: 0,
    name: ButtonTitles.SERVICES
  }, {
    id: 1,
    name: ButtonTitles.STUDY
  }, {
    id: 2,
    name: ButtonTitles.PROCESS
  }, {
    id: 3,
    name: ButtonTitles.TEAM
  }, {
    id: 4,
    name: ButtonTitles.CONTACT
  }];

  const socialButton = () => {
    return (
      <div className='flex gap-5'>
        <button>
          <img src={linkedinBlack} />
        </button>
        <button>
          <img src={fbBlack} />
        </button>
        <button>
          <img src={twitterBlack} />
        </button>
      </div>
    )
  }

  return (
    <div className="min-w-[420px] mt-[90px] md:mt-6 md:container md:mx-auto">
      <div className="bg-customDark py-[50px] max-md:px-5 md:px-[60px] rounded-t-[35px]">
        <div className='flex flex-1 items-center flex-col md:flex-row md:justify-between gap-8'>
          <img className='w-36' src={logoWhite} />
          <div className='flex flex-col md:flex-row gap-4'>
            {listOfButtons.map(item => <button>
              <span className='text-white text-[16px]'>
                {item.name}
              </span>
            </button>)}
          </div>
          <div className='hidden md:flex'>
            {socialButton()}
          </div>
        </div>
        <div className='flex flex-col md:flex-row flex-1 mt-8 gap-8 md:mt-[60px]'>
          <div className='flex flex-1 items-center md:items-start flex-col gap-8'>
            <TitleText customTextClassName="text-[20px]" title={`${Labels.CONTACT_US_BODY}:`} />
            <div className='flex flex-col items-center md:items-start gap-4'>
              <span className='text-white text-[16px]'>Email: {email}</span>
              <span className='text-white text-[16px]'>Phone: {contact}</span>
              <span className="text-white text-[16px] whitespace-pre-line max-md:text-center">Address: {address}</span>
            </div>
          </div>
          <div className='flex flex-1 bg-[#292A32] rounded-[15px] p-8 flex-col gap-5'>
            <div className='flex flex-1'>
              <input type="text" className="flex flex-1 font bg-[#292A32] border-gray-300 py-5 text-white text-sm focus:ring-blue-500 focus:border-blue-500 w-full px-6 rounded-[15px] dark:focus:ring-customGreen dark:focus:border-customGreen" placeholder={Labels.EMAIL} required />
            </div>
            <TextButton type={IconButtonType.LIGHT} customContainerClassName="flex flex-1" customButtonClassName='flex flex-1 items-center justify-center' buttonText={ButtonTitles.SUBSCRIBE_NEWS} />
          </div>
        </div>
        <div className='flex justify-center align-middle md:hidden mt-9'>
          {socialButton()}
        </div>
        <Divider horizontal customDividerClassname='border bg-white mt-9' />
        <div className='mt-[50px] flex flex-col justify-center items-center gap-4 md:flex-row md:justify-start'>
          <span className='text-white font-[18px]'>{Labels.RIGHTS}</span>
          <button>
            <span className='text-white font-[18px] underline'>{ButtonTitles.PRIVACY_POLICY}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer