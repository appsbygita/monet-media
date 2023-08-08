import { Button, ButtonIcon } from "./ctabutton.styles";

export const CTAButton = ({ children }) => {
  return (
    <Button>
      <cta>{children}</cta> <ButtonIcon />
    </Button>
  );
};
