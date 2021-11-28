import React from 'react';
import {Grid, Paper, Avatar, Typography,TextField,Button } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const Signup = () => {
    const  paperStyle={padding: '30px 20px',width: 300,margin: '0 auto'}
    const headerStyle={margin: '0'}
    const avatarStyle={backgroundColor:'#1fca9f'}
    const marginTop ={marginTop:5}


    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />

                    </Avatar>
                    <h2 style ={ headerStyle}>Sign up</h2>
                    <Typography variant='caption' gutterBottom>
                        Please fill this from to create an account |
                    </Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' />
                    <TextField fullWidth label='Address' placeholder='Enter your Address' />
                    <TextField fullWidth label='Email' placeholder='Enter your Email' />
                    <TextField fullWidth label='Username' placeholder='Enter your user name' />
                    <TextField fullWidth label='Create Password' placeholder='Create Password' />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="I accept terms and conditions"
                    />
                    <Button type='Submit' variant='contained' color='primary'>Sign Up</Button>
                </form>

            </Paper>
        </Grid>
    )

}
export default Signup;