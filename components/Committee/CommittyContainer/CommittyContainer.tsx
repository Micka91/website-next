interface IProps {
  children: React.ReactNode;
}

const CommittyContainer = ({ children }: IProps) => {
  return <div className="commitee__container">{children}</div>;
};

export default CommittyContainer;
