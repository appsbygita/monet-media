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
          <InputRow paddingTop="32px">
            <CTAButton width="50%" height="3.7rem">
              Submit
            </CTAButton>
          </InputRow>
        </RightCol>
      </PopupContent>
    </DisplayContainer>
  );
};
