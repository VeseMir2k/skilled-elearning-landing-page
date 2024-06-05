const Logo = ({ variant }: { variant: string }) => {
  const colorClass = { light: 'text-white', dark: 'text-navyBlue' }[variant];

  return <h1 className={`${colorClass} text-headingS text-navyBlue font-extrabold`}>skilled</h1>;
};

export default Logo;
