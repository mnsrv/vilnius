import Typography from 'typography'

const themeVilnius = {
  baseFontSize: '18px',
  bodyColor: 'black',
  overrideStyles: () => ({
    a: {
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: '0 1px 0 0 currentColor',
    },
    '.home_link:hover,.home_link:active': {
      boxShadow: 'none'
    },
    h4: {
      fontWeight: 'normal',
      lineHeight: 1.45,
      margin: 0
    }
  })
}

const typography = new Typography(themeVilnius)

export default typography