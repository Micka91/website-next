/* eslint-disable @next/next/no-img-element */

interface IProps {
  src: string | undefined;
  alt: string;
  className: string;
  children?: React.ReactNode;
}

const Background = ({ src, alt, className, children }: IProps) => {
  return (
    <div className="background">
      <img src={src} alt={alt} className={className} />
      {children}
    </div>
  );
};

export default Background;
