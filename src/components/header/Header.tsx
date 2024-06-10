import HeaderImage from './HeaderImage';
import HeaderIntro from './HeaderIntro';

const Header = () => (
  <div className="xl:flex xl:justify-center">
    <div className="relative mt-[38px] items-center px-[16px] md:mb-[190px] md:mt-[100px] md:flex md:px-[40px] lg:mb-[250px] xl:w-[1280px]">
      <HeaderIntro />
      <HeaderImage />
    </div>
  </div>
);

export default Header;
