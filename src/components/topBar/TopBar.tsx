import Button from '../button';
import Logo from '../logo';

const TopBar = () => (
  <div className="flex items-center justify-between p-[16px] pb-0">
    <Logo variant="dark" />
    <Button color="navyBlue" size="normal" />
  </div>
);

export default TopBar;
