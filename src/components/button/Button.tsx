const Button = ({ color, size }: { color: string; size: string }) => {
  const colorClass = {
    navyBlue: 'bg-navyBlue hover:bg-indigo',
    gradient_1: 'bg-gradient_1 hover:bg-gradientHover_1 bg-white',
    gradient_2: 'bg-gradient_2 hover:bg-gradientHover_2 bg-white',
  }[color];

  const sizeClass = {
    normal: 'px-[24px] py-[10px]',
    big: 'px-[37px] py-[15px]',
  }[size];

  return <button className={`${colorClass} ${sizeClass} text-bodyS rounded-[28px] text-white`}>Get Started</button>;
};

export default Button;
