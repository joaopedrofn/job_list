const Button = ({ children, variant = "contained", link, ...props }) => {
  const classes = {
    contained: `
      bg-blue-700
      text-white 
      border-blue-700
    `,
    outlined: `
      border-blue-700
      text-blue-700
    `,
  };
  const Component = link ? "a" : "button";
  return (
    <Component
      {...props}
      className={`px-2 py-1 border rounded-md ${classes[variant]}`}
    >
      {children}
    </Component>
  );
};

export default Button;
