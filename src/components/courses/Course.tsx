import animationIcon from '../../assets/icon-animation.svg';

const Course = () => (
  <div className="relative rounded-[10px] bg-white px-[28px]">
    <img className="absolute top-[-28px]" src={animationIcon} alt="animation" />
    <h4 className="text-navyBlue mt-[56px] text-[20px] font-extrabold">Animation</h4>
    <p className="text-grayishBlue text-bodyS mt-[16px] font-normal">
      Learn the latest animation techniques to create stunning motion design and captivate your audience.
    </p>
    <button className="text-bodyM text-hotPink mb-[32px] mt-[24px] font-bold">Get Started</button>
  </div>
);

export default Course;
