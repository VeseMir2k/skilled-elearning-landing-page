import Button from '../button';

const HeaderIntro = () => (
  <div className="w-[60%] lg:w-[50%]">
    <h2 className="pb-[26px] text-headingL text-navyBlue lg:text-headingXL">Maximize skill, minimize budget</h2>
    <p className="pb-[24px] text-[16px] font-normal leading-[26px] text-grayishBlue lg:text-bodyM">
      Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you
      want.
    </p>
    <Button color="gradient_1" size="big" />
  </div>
);

export default HeaderIntro;
