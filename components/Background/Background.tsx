/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

interface IProps {
  src: string;
  alt: string;
  className: string;
  children?: React.ReactNode;
}

const Background = ({ src, alt, className, children }: IProps) => {
  return (
    <div className="background">
      <Image
        src={src}
        alt={alt}
        className={className}
        layout="fill"
        // width="100vw"
        // height="100vh"
        objectFit="cover"
        priority={true}
      />
      {children}
    </div>
  );
};

export default Background;
