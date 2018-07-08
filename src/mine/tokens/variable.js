const baseFonts = {
  familySytem: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue", sans-serif',
  wBold: 400,
  wMedium: 300,
  wLight: 100
}

export const fonts = {
    family: baseFonts.familySytem,

    wBold: baseFonts.wBold,
    wMedium: baseFonts.wMedium,
    wNormal: baseFonts.wLight,

    wHeader: baseFonts.wBold
}


const vertical_rytm = 4;

export function getSpaceUnit(unit) {
  return unit * vertical_rytm;
}
