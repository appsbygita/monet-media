import {
  CloseButton,
  DisplayContainer,
  InputField,
  InputLabel,
  InputRow,
  InputText,
  LeftCol,
  PopupContent,
  RightCol,
  TopRow,
} from "./contact-form-popout.styles";
import Checkbox from "../checkbox/checkbox.component";
import { SocialLinks } from "../social-links/social-links.component";

import CloseIcon from "../../../assets/close.svg";
import { CTAButton } from "../cta-button/cta-button.component";

export const ContactFormPopout = ({ onButtonClick, className }) => {
  return (
    <DisplayContainer className={className}>
      <TopRow>
        <CloseButton src={CloseIcon} onClick={onButtonClick} />
      </TopRow>
      <PopupContent>
        <LeftCol>
          <p>
            Join <b>the waitlist</b> today
          </p>
          <SocialLinks />
        </LeftCol>
        <RightCol>
          <regularText>
            Fill in your details and be among the first to know about Monet
            Media
          </regularText>
          <titleText>Contact Detail</titleText>
          <form>
            <InputRow>
              <InputField width="48%">
                <InputLabel>First Name</InputLabel>
                <InputText />
              </InputField>
              <InputField width="48%">
                <InputLabel>Last Name</InputLabel>
                <InputText />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Email</InputLabel>
                <InputText />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Country</InputLabel>
                <InputText />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Area of Interest</InputLabel>
                <InputText />
              </InputField>
            </InputRow>
            <InputRow>
              <Checkbox
                label="By submitting this form, you consent to receive messages from
                  all Monet Group platforms. These may be about our products,
                  services, deals, and updates. You can unsubscribe at any time
                  by following instructions in the messages. We value your
                  privacy and won't share your info with others without your
                  clear permission."
                checked={true}
              />
            </InputRow>
            <InputRow paddingTop="2vh">
              <CTAButton width="50%" height="3.7rem">
                Submit
              </CTAButton>
            </InputRow>
          </form>
        </RightCol>
      </PopupContent>
    </DisplayContainer>
  );
};
