import headerImgDesktop from '../../assets/image-hero-desktop.png';
import headerImgMobile from '../../assets/image-hero-mobile.png';
import headerImgTablet from '../../assets/image-hero-tablet.png';

const HeaderImage = () => (
  <picture>
    <source media="(min-width:1024px)" srcSet={headerImgDesktop} />
    <source media="(min-width:768px)" srcSet={headerImgTablet} />
    <img className="mt-[66px] w-full scale-125" src={headerImgMobile} alt="header image hero" />
  </picture>
);

export default HeaderImage;
