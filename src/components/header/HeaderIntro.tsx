import Button from '../button';

const HeaderIntro = () => (
  <div className="w-[60%]">
    <h2 className="text-headingL text-navyBlue lg:text-headingXL pb-[26px]">Maximize skill, minimize budget</h2>
    <p className="text-grayishBlue lg:text-bodyM pb-[24px] text-[16px] font-normal leading-[26px]">
      Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you
      want.
    </p>
    <Button color="gradient_1" size="big" />
  </div>
);

export default HeaderIntro;
