import React, { HTMLAttributes } from "react";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Hero = ({ children, style }: IProps) => {
  return (
    <div className="hero" style={style}>
      {children}
    </div>
  );
};

export default Hero;
