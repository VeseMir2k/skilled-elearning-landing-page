import Button from '../button';
import TopBarLogo from './TopBarLogo';

const TopBar = () => (
  <div className="flex items-center justify-between">
    <TopBarLogo />
    <Button color="navyBlue" size="normal" />
  </div>
);

export default TopBar;
