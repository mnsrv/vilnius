import Typography from 'typography'

const themeVilnius = {
  baseFontSize: '18px',
  bodyColor: 'black',
  overrideStyles: () => ({
    '.home_link': {
      textDecoration: 'none',
    },
    '.container': {
      marginTop: 0,
      maxWidth: '650px'
    },
    "@media only screen and (min-width:650px)": {
      ".container": {
        margin: '1rem auto',
      },
    },
    h4: {
      fontWeight: 'normal',
      lineHeight: 1.45,
      margin: 0
    },
    'p + ol, p + ul': {
      marginTop: '-1rem'
    },
    'main': {
      padding: '0 1rem',
      marginBottom: '1.45rem'
    },
    'header': {
      backgroundColor: '#FB090B',
      padding: '1rem',
      marginBottom: '1.45rem'
    },
    'header ul': {
      marginBottom: 0
    },
    'header li': {
      marginBottom: 0
    },
    'header a': {
      color: 'black'
    },
    'header a.active': {
      color: 'white',
      textDecoration: 'none',
      cursor: 'default'
    },
    'blockquote': {
      borderLeft: '0.25rem solid #ccc',
      marginLeft: 0,
      paddingLeft: '1.45rem'
    }
  })
}

const typography = new Typography(themeVilnius)

export default typography