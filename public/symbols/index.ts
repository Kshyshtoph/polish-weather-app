import n000 from "./n000.webp";
import d000 from "./d000.webp";
import n220 from "./n220.webp";
import d220 from "./d220.webp";
import n412 from "./n412.webp";
import d412 from "./d412.webp";
import n420 from "./n420.webp";
import d420 from "./d420.webp";
import n421 from "./n421.webp";
import d421 from "./d421.webp";

export const day = {
  "bez opadów": d000,
  deszcz: d420,
  mżawka: d220,
  śnieg: d412,
  "przelotne opady": d220,
  "deszcz ze śniegiem": d421,
};

export const night = {
  "bez opadów": n000,
  deszcz: n420,
  mżawka: n220,
  śnieg: n412,
  "przelotne opady": n220,
  "deszcz ze śniegiem": n421,
};

export default { day, night };
