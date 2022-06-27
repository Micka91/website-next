interface IProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: IProps) => {
  let classes = className ? ["button", className].join(" ") : "button";

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
