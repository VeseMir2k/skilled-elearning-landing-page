import Button from '../button';
import Logo from '../logo';

const TopBar = () => (
  <div className="xl:flex xl:justify-center">
    <div className="flex items-center justify-between p-[16px] pb-0 md:px-[40px] md:pt-[24px] xl:w-[1280px]">
      <Logo variant="dark" />
      <Button color="navyBlue" size="normal" />
    </div>
  </div>
);

export default TopBar;
