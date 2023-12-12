// @ts-nocheck

const checkArg = (arg, def) => (typeof arg === undefined ? def : arg);
const getSaturationRange = (
  modeRanges,
  mode: string,
  chromaChannel
): [number, number] => modeRanges[mode.toLowerCase()][chromaChannel];

const getModeChannel = (mode: string, key: number) => mode.charAt(key);
export { checkArg, getModeChannel, getSaturationRange };
