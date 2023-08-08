import { Button, ButtonIcon } from "./cta-button.styles";

export const CTAButton = ({ children }) => {
  return (
    <Button>
      <cta>{children}</cta> <ButtonIcon />
    </Button>
  );
};
