import Typography from 'typography'

const themeVilnius = {
  baseFontSize: '18px',
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