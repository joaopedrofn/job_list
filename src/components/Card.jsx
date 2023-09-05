const Card = ({ children, onClick }) => {
  return (
    <div
      data-testid='card'
      onClick={onClick}
      className={`
        rounded-md
        border-solid
        ${onClick && "cursor-pointer"}
        p-2
        border-white
        border
        hover:border-blue-700
        bg-white
        shadow-none
        hover:shadow-md
        transition-all
        duration-300
      `}
    >
      {children}
    </div>
  );
};

export default Card;
