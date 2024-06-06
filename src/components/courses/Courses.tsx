import CoursesCourse from './CoursesCourse';

const Courses = () => {
  const coursesData = [
    {
      name: 'Animation',
      description:
        'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
      icon: './assets/icon-animation.svg',
    },
    {
      name: 'Design',
      description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
      icon: './assets/icon-design.svg',
    },
    {
      name: 'Photography',
      description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
      icon: './assets/icon-photography.svg',
    },
    {
      name: 'Crypto',
      description:
        'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
      icon: './assets/icon-crypto.svg',
    },
    {
      name: 'Business',
      description:
        'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
      icon: './assets/icon-business.svg',
    },
  ];

  const courses = coursesData.map((item) => (
    <CoursesCourse name={item.name} description={item.description} icon={item.icon} />
  ));

  return (
    <div className="bg-gradient_3 flex flex-col gap-[44px] px-[16px] pb-[80px] md:flex-1 md:flex-row md:flex-wrap">
      <h3 className="bg-gradient_1 text-headingS rounded-[10px] px-[28px] pb-[32px] pt-[24px] text-white">
        Check out our most popular courses!
      </h3>
      {courses}
    </div>
  );
};

export default Courses;
