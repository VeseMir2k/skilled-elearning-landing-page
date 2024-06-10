const CoursesCourse = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
  <div className="relative rounded-[10px] bg-white px-[28px] md:mb-[56px] md:basis-1/2-minus-5 md:px-[32px] md:odd:ml-0 md:even:ml-[10px]">
    <img className="absolute top-[-28px]" src={icon} alt="animation" />
    <h4 className="mt-[56px] text-[20px] font-extrabold text-navyBlue lg:text-headingS">{name}</h4>
    <p className="mt-[16px] text-bodyS font-normal text-grayishBlue lg:text-bodyM">{description} </p>
    <button className="mb-[32px] mt-[24px] text-bodyM font-bold text-hotPink">Get Started</button>
  </div>
);

export default CoursesCourse;
