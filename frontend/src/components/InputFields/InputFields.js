import React from 'react';
import { Grid, Paper, TextField, Button, ButtonGroup } from '@mui/material';
import { Typography } from '@material-ui/core';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const InputFields = () => {
    return (
        <Grid container direction="column" spacing={2} justify="center">
            <Grid item container direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <Paper>
                        <Typography p={1}>
                            Decoded message
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Decode"
                            multiline
                            rows={3}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <Typography p={1}>
                            Password
                        </Typography>
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <ButtonGroup disableElevation variant="contained">
                            <Button>One</Button>
                            <Button>Two</Button>
                        </ButtonGroup>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <Typography p={1}>
                            Encoded message
                        </Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Encode"
                            multiline
                            rows={3}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InputFields;
