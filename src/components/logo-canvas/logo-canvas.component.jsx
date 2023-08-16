import { useEffect } from "react";

export const LogoCanvas = ({ width }) => {
  useEffect(() => {
    const cnv = document.getElementById("tc");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = process.env.PUBLIC_URL + "/logo-script.js";

    cnv.appendChild(script);
    console.log(cnv);

    return () => script.remove();
  }, []);

  return <canvas id="tc" width={width}></canvas>;
};
