const Button = ({ color, size }: { color: string; size: string }) => {
  const colorClass = {
    navyBlue: 'bg-navyBlue',
    gradient_1: 'bg-gradient_1',
    gradient_2: 'bg-gradient_2',
  }[color];

  const sizeClass = {
    normal: 'px-[24px] py-[10px]',
    big: 'px-[37px] py-[15px]',
  }[size];

  return <button className={`${colorClass} ${sizeClass} text-bodyS rounded-[28px] text-white`}>Get Started</button>;
};

export default Button;
