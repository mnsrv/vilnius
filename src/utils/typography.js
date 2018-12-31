import Typography from 'typography'

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]
const themeVilnius = {
  baseFontSize: '18px',
  headerFontFamily: fontFamily,
  bodyFontFamily: fontFamily,
  overrideStyles: () => ({
    a: {
      color: 'hsl(230,55%,58%)',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: '0 1px 0 0 currentColor',
    },
  })
}

const typography = new Typography(themeVilnius)

export default typography