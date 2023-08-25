import Select from "react-select";
import { useState } from "react";

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
  customStyles,
  selectTheme,
} from "./contact-form-popout.styles";
import Checkbox from "../checkbox/checkbox.component";
import { SocialLinks } from "../social-links/social-links.component";
import Spinner from "../../spinner/spinner.component";

import CloseIcon from "../../../assets/close.svg";
import { CTAButton } from "../cta-button/cta-button.component";
import { CountrySelect } from "../country-select/country-select.component";

const interestOptions = [
  { value: "general", label: "General" },
  { value: "arts", label: "Arts" },
  { value: "advertising", label: "Advertising" },
  { value: "monet-tokens", label: "Monet Tokens" },
];

const defaultCountry = {
  label: "🇦🇺 Australia",
  value: "AU",
};

const defaultInterest = {
  label: "General",
  value: "general",
};

export const ContactFormPopout = ({ onButtonClick, className }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [countryCode, setCountryCode] = useState(defaultCountry);
  const [interestArea, setInterestArea] = useState(defaultInterest);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const closeButtonClick = () => {
    setMessage("");
    onButtonClick();
  };

  const data = {
    fields: [
      {
        objectTypeId: "0-1",
        name: "firstname",
        value: firstName,
      },
      {
        objectTypeId: "0-1",
        name: "lastname",
        value: lastName,
      },
      {
        objectTypeId: "0-1",
        name: "email",
        value: emailAddress,
      },
      {
        objectTypeId: "0-1",
        name: "country_code",
        value: countryCode.value,
      },
      {
        objectTypeId: "0-1",
        name: "area_of_interest",
        value: interestArea.value,
      },
    ],
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/40203778/24593b89-c320-48b9-9a95-b685b4b6ef0b",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error(res.json());
        else return res.json();
      })
      .then((res) => {
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setCountryCode(defaultCountry);
        setInterestArea(defaultInterest);
        setMessage("Thank you for submitting your data.");
        setIsLoading(false);
        setIsChecked(false);
      })
      .catch((err) => {
        setMessage("Form submission error");
        console.log(err.message);
        setIsLoading(false);
      });
  };

  return (
    <DisplayContainer className={className}>
      <TopRow>
        <CloseButton src={CloseIcon} onClick={closeButtonClick} />
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

          <form id="waitlist-form" onSubmit={handleSubmit}>
            <InputRow>
              <InputField width="48%">
                <InputLabel>First Name</InputLabel>
                <InputText
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputField>
              <InputField width="48%">
                <InputLabel>Last Name</InputLabel>
                <InputText
                  id="lastname"
                  name="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Email</InputLabel>
                <InputText
                  type="email"
                  id="email"
                  name="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Country</InputLabel>
                <CountrySelect
                  id="country_code"
                  name="country_code"
                  required
                  theme={selectTheme}
                  styles={customStyles}
                  value={countryCode}
                  onChange={(e) => setCountryCode(e)}
                />
              </InputField>
            </InputRow>
            <InputRow>
              <InputField>
                <InputLabel>Area of Interest</InputLabel>
                <Select
                  id="area_of_interest"
                  name="area_of_interest"
                  required
                  isSearchable={false}
                  options={interestOptions}
                  theme={selectTheme}
                  styles={customStyles}
                  value={interestArea}
                  onChange={(e) => setInterestArea(e)}
                />
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
                checked={isChecked}
                onChange={(e) => setIsChecked(!isChecked)}
              />
            </InputRow>
            <InputRow paddingTop="2vh" justify="flex-start">
              <CTAButton width="50%" height="3.7rem" disabled={isLoading}>
                {isLoading ? <Spinner /> : "Submit"}
              </CTAButton>
              <span className="submit-message">{message}</span>
            </InputRow>
          </form>
        </RightCol>
      </PopupContent>
    </DisplayContainer>
  );
};
