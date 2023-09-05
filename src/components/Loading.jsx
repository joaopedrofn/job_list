const Loading = () => {
  return (
    <div
      data-testid="loading"
      className="fixed z-50 h-screen w-screen backdrop-blur-sm top-0 flex justify-center items-center"
    >
      <img
        className="object-center"
        src="/images/jobylon_animated.gif"
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
