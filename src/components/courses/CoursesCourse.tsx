const CoursesCourse = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
  <div className="md:basis-1/2-minus-5 relative rounded-[10px] bg-white px-[28px] md:mb-[56px] md:px-[32px] md:odd:ml-0 md:even:ml-[10px]">
    <img className="absolute top-[-28px]" src={icon} alt="animation" />
    <h4 className="text-navyBlue lg:text-headingS mt-[56px] text-[20px] font-extrabold">{name}</h4>
    <p className="text-grayishBlue text-bodyS lg:text-bodyM mt-[16px] font-normal">{description} </p>
    <button className="text-bodyM text-hotPink mb-[32px] mt-[24px] font-bold">Get Started</button>
  </div>
);

export default CoursesCourse;
