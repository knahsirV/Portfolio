const LatestProjects = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex snap-x items-center gap-4 md:flex-row md:items-start md:justify-between md:gap-0'>
      {children}
    </div>
  );
};

export default LatestProjects;
