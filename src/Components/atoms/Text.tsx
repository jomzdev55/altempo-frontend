import React from "react";
import { ThemeColors } from "../../Interfaces/ThemeColors";
import { FontSizes } from "../../Interfaces/FontSizes";
import { FontWeight } from "../../Interfaces/FontWeight";

// Definición de tipos para las props del componente
interface TextProps {
  color?: keyof typeof ThemeColors;
  size?: keyof typeof FontSizes;
  weight?: keyof typeof FontWeight;
  align?: "left" | "center" | "right";
  family?: "montserrat" | "inter";
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  color = "disabled",
  size = "pbase",
  weight = "light",
  align = "left",
  className,
  family = "inter",
  children,
}) => {
  const fontColor = ThemeColors[color];
  const fontSize = FontSizes[size];
  const fontWeight = FontWeight[weight];

  const style = {
    color: fontColor,
    fontSize,
    fontWeight,
    textAlign: align,
    fontFamily: family,
  };

  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};

export default Text;
