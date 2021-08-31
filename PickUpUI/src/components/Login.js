import React ,{ useEffect, useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './LoginStyle.js'
import { postLogin, getUserDetails } from "../services";
import { SIGNUP } from '../navigation/CONSTANTS.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Login() {
  const classes = useStyles();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [errors, setErrors] = useState("");
  const userInfo = {
      "id" : undefined,
      "name": undefined,
      "email": undefined,
      "role": undefined,
      "phone": undefined
    }
    
    const goToLongin = ()=>{
        console.warn(phone,password)
        var requestDto = {
             "phone": phone,
             "password": password 
           };
        postLogin(requestDto)
        .then(result =>{
          console.log('result from me',result);
          console.log("The login operation response status code is :%s", result.status);
          setUserId(result.data.idUser);
          getUserDetails(phone)
            .then((res)=>{
              console.log('returned user object is', res.data)
              userInfo.name = res.data.name;
              userInfo.email = res.data.email;
              userInfo.role = res.data.role;
              userInfo.phone = res.data.phone;
              if (userInfo.role == true){
              // redirect to back office
              } else if ( userInfo.role == false){
              // redirect to frent office
              }
             // goToStarSurvey();
            });
        }).catch(err =>{
          if(err.response.status == 401)
           setErrors('User name or password not valid.');
          else{
            console.log('Unknown error');
            //goToHomePage();
          }
        });
       }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <span style={errors ? {visibility: "visible", color: "red"}: null} >{errors}</span>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              onChange={(e)=>{setPhone(e.target.value) }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={()=>goToLongin()
            }
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={SIGNUP} variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
 