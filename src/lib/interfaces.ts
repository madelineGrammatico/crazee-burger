export interface ButtonStyledType {
    version: "primary" | "success" | "warning",
    size: "large" | "regular" | "slim" | "full"
  }

export interface TextInputStyledProps {
    version: "normal" | "slim",
  }

  export interface CardStyledProps {
    $isHoverAble: boolean,
    $isSelected: boolean,
  }