import React from 'react';
import { Box, Grid } from '@mui/material';
import { Edit, EventAvailable } from '@mui/icons-material';

const AvailabilitySection = ({ userData }) => {
    return (
        <Box component="div" className='profile__section' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '0'
        }}>

            <Grid container spacing={4} sx={{
                marginRight: '30px'
            }}>
                <Grid item md={6} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <EventAvailable sx={{ fontSize: '17px', marginRight: '8px' }} />
                    Availability
                </Grid>

                <Grid item md={6} sm={6} xs={12} sx={{
                    textAlign: 'right',
                    fontSize: '14px'
                }}>
                    <Box component="p" sx={{
                        fontWeight: '600',
                        marginBottom: '5px'
                    }}>
                        {userData?.availability ? userData.availability : 'Full time'}
                    </Box>
                </Grid>


            </Grid>

            <Edit sx={{ color: '#CDCDCD', cursor: 'pointer' }} />
        </Box>
    );
};

export default AvailabilitySection;