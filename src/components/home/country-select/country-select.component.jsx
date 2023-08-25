import { useEffect, useState } from "react";
import Select from "react-select";

export const CountrySelect = ({ theme, styles, value, onChange }) => {
  const [countries, setCountries] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState(value);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        // setSelectedCountry(data.userSelectValue.value);
      });
    // console.log("init country ", selectedCountry);
  }, []);
  return (
    <Select
      options={countries}
      value={value}
      onChange={onChange}
      theme={theme}
      styles={styles}
    />
  );
};
