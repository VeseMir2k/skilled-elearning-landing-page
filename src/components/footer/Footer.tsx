import Button from '../button';
import Logo from '../logo';

const Footer = () => (
  <div className="bg-navyBlue xl:flex xl:justify-center">
    <div className="flex items-center justify-between px-[16px] py-[36px] xl:w-[1280px]">
      <Logo variant="light" />
      <Button color="gradient_2" size="normal" />
    </div>
  </div>
);

export default Footer;
