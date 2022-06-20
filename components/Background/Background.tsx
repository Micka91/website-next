/* eslint-disable @next/next/no-img-element */

interface IProps {
  src: string | undefined;
  alt: string;
  className: string;
  children?: React.ReactNode;
}

const Background = ({ src, alt, className, children }: IProps) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
      {children}
    </>
  );
};

export default Background;
