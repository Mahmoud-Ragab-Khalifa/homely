const MainHeading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold mb-6 md:mb-8 xl:mb-10 text-shadow-md text-shadow-neutral-500 drop-shadow-md">
      {title}
    </h2>
  );
};

export default MainHeading;
