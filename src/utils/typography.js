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
    '.container__full': {
      marginTop: 0
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
      maxWidth: '650px',
      margin: '0 auto',
      backgroundColor: '#fcc',
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
    '.year_progress': {
      maxWidth: '650px',
      margin: '0 auto',
      position: 'relative',
      backgroundColor: '#eee'
    },
    'blockquote': {
      borderLeft: '0.25rem solid #ccc',
      marginLeft: 0,
      paddingLeft: '1.45rem'
    },
    '.image': {
      display: 'block',
      float: 'left',
      width: '100%',
      marginBottom: '1rem',
      marginRight: '1rem'
    },
    "@media only screen and (min-width:650px)": {
      ".container": {
        margin: '1rem auto',
      },
      '.container__full': {
        margin: '1rem auto',
      },
      '.image': {
        width: 'auto',
        minHeight: '200px',
        maxHeight: '50vh'
      }
    },
  })
}

const typography = new Typography(themeVilnius)

export default typography