import React, { useState, useEffect } from 'react';
import { Grid, Paper, TextField, Button, ButtonGroup } from '@mui/material';
import { Typography } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {sendDecode , sendEncode} from '../../store/actions/actions'
import { useDispatch } from "react-redux";
import axiosApi from '../../axiosApi';

const InputFields = () => {
    const dispatch = useDispatch();
    
    const [input, setInput] = useState({
        encode: '',
        decode: '',
        password: '',
    });

    
    const onInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    const decode = async e => {
        e.preventDefault();
        
        try {
            await dispatch(sendDecode({ ...input }));
        } catch (e) {
            console.log('error happened');
        }
    };
    
    const encode = async e => {
        e.preventDefault();
        
        try {
            await dispatch(sendEncode({ ...input }));
        } catch (e) {
            console.log('error happened');
        }
    };
    
    useEffect(() => {   
        const fetchCode = async () => {
            const response = await axiosApi.get('encode');
            setInput(response.data);
        }
        fetchCode().catch(console.error);
    }, []);

    return (
        <Grid container direction="column" spacing={2}  mt={3} >
            <Grid item container direction="row"  alignItems="center" sx={{ justifyContent: 'center'}}>
                <Grid item>
                    <Paper sx={{margin: '2rem'}}>
                        <Typography p={1}>
                            Decoded message
                        </Typography>
                        <TextField
                            label="Decode"
                            multiline
                            rows={3}
                            type="text"
                            name='decode' 
                            value={input.decode}
                            onChange={onInputChange}  
                            sx={{ margin: '15px' }}
                        />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper>
                        <Grid item container direction="column" alignItems="center">
                            <Typography p={1}>
                                Password
                            </Typography>
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="text"
                                name='password'
                                value={input.password}
                                onChange={onInputChange} 
                                sx={{ margin: '0 15px' }}
                            />
                            <ButtonGroup disableElevation variant="contained" sx={{ margin: '15px 0'}}>
                                <Button onClick={decode}>
                                    <ArrowLeftIcon />
                                </Button>
                                <Button onClick={encode}>
                                    <ArrowRightIcon />
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper sx={{margin: '2rem'}}>
                        <Typography p={1}>
                            Encoded message
                        </Typography>
                        <TextField
                            label="Encode"
                            multiline
                            rows={3}
                            type="text"
                            name='encode'
                            value={input.encode}
                            onChange={onInputChange} 
                            sx={{ margin: '15px' }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InputFields;
