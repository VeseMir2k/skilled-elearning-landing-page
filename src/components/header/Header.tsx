import Button from '../button';
import HeaderImage from './HeaderImage';
import HeaderIntro from './HeaderIntro';

const Header = () => (
  <div className="mt-[38px] px-[16px]">
    <HeaderIntro />
    <Button color="gradient_1" size="big" />
    <HeaderImage />
  </div>
);

export default Header;
