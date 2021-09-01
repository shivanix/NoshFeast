import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom: '0.5em',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  orderList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    // flex: 1,
    // flexGrow: 1,
  },
  accordion: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      backgroundColor: 'black',
      color:'white',
      
      '&:hover': {
        backgroundColor: 'black',
      },
    }

  },

  accordionButtons: {
    width: '20em',
    display: 'flex',
    justifyContent: 'space-between',

  },


  perorder: {
    backgroundColor: '#e9ebf0',
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    minWidth: 650,
  },

  cartButtons: {
    '& a':{
      color: 'inherit',
      textDecoration: 'none',
    },

    '& button': {
      backgroundColor: 'black',
      color:'white',
      
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  tableRoot: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em',
    typography: '50px',
    fontSize: '18px',
  },
  table: {
    minWidth: 700,
  },
  productImg: {
    height: '60%',
    width: '80%',
    marginBottom: '1em',
  },
  imgColumn: {
    width: '40px'
  }
}));

export default useStyles;