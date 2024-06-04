import Button from '../button';
import Logo from './Logo';

const TopBar = () => (
  <div className="flex items-center justify-between">
    <Logo />
    <Button />
  </div>
);

export default TopBar;
