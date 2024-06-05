const Course = ({ name, description, icon }: { name: string; description: string; icon: string }) => (
  <div className="relative rounded-[10px] bg-white px-[28px]">
    <img className="absolute top-[-28px]" src={icon} alt="animation" />
    <h4 className="text-navyBlue mt-[56px] text-[20px] font-extrabold">{name}</h4>
    <p className="text-grayishBlue text-bodyS mt-[16px] font-normal">{description} </p>
    <button className="text-bodyM text-hotPink mb-[32px] mt-[24px] font-bold">Get Started</button>
  </div>
);

export default Course;
