import HeaderImage from './HeaderImage';
import HeaderIntro from './HeaderIntro';

const Header = () => (
  <div className="relative mt-[38px] items-center px-[16px] md:mb-[190px] md:mt-[100px] md:flex md:px-[40px]">
    <HeaderIntro />
    <HeaderImage />
  </div>
);

export default Header;
