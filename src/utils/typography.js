import Typography from 'typography'

const themeVilnius = {
  baseFontSize: '18px',
  bodyColor: 'black',
  overrideStyles: () => ({
    'body': {
      backgroundColor: '#f6f7f8'
    },
    '.home_link': {
      textDecoration: 'none',
    },
    '.container': {
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0 1rem',
      maxWidth: '650px'
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
      marginBottom: '3rem'
    },
    'header': {
      padding: '1rem 0',
      borderBottom: '1px solid rgb(219,219,219)',
      marginBottom: '1.5rem'
    },
    'header ul': {
      listStyle: 'none',
      marginBottom: 0
    },
    'header li': {
      marginBottom: 0
    },
    'header a': {
      color: 'black'
    },
    'header a.active': {
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