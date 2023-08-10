import { Button, ButtonIcon } from "./cta-button.styles";

export const CTAButton = ({
  children,
  onClick,
  width = "30rem",
  height = "5rem",
}) => {
  return (
    <Button onClick={onClick} width={width} height={height}>
      <cta>{children}</cta> <ButtonIcon />
    </Button>
  );
};
