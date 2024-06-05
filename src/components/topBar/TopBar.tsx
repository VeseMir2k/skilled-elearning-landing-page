import Button from '../button';
import TopBarLogo from './TopBarLogo';

const TopBar = () => (
  <div className="flex items-center justify-between p-[16px] pb-0">
    <TopBarLogo />
    <Button color="navyBlue" size="normal" />
  </div>
);

export default TopBar;
