const MainLayout = ({ children }) => {
  return (
    <div className="h-screen p-4 flex flex-col gap-2 bg-slate-200">
      <img
        src="/images/logo.svg"
        alt="Jobylon"
        width="30%"
        className="mx-auto"
      />
      {children}
    </div>
  );
};

export default MainLayout;
