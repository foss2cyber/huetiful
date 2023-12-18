import { HueColorSpaces } from "../../types";

/**
 * @function
 * Matches the chroma/saturation channel of any compliant color space
 * @param colorSpace The color space to match saturation/chroma channel.
 * @returns The mode channel string passed to getChannel()
 */
const matchChromaChannel = (colorSpace: HueColorSpaces | string): string => {
  // Matches any string with c or s
  const reChroma = /(s|c)/i;
  const ch = reChroma.exec(colorSpace)["0"];

  if (reChroma.test(colorSpace)) {
    return `${colorSpace}.${ch}`;
  } else {
    throw Error(
      `The color space ${colorSpace} has no chroma/saturation channel.`
    );
  }
};

export { matchChromaChannel };
