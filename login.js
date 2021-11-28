import React from 'react';
import {Grid, Paper, Avatar, TextField, Typography, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const Login = ({handleChange}) => {

    const paperStyle={padding :20,height :'45vh',width :300,margin :'0x auto'}
    const avatarStyle={backgroundColor :"#1fca9f"}
    const btnStyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center' >
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>

                </Grid>
                <TextField label='Userame' placeholder='Enter User Name'fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>
                    Sign In</Button>
                <Typography> <Link href="#" >
                    forgot password ?
                </Link>
                </Typography>
                <Typography>Do you have an account ? <Link href="#" onClick={()=> handleChange("event",1)} >
                    Sign Up
                </Link>
                </Typography>
                </Paper>
        </Grid>

    )
}
export default Login;