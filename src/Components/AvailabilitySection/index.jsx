import React from 'react';
import { Box } from '@mui/material';

const AvailabilitySection = ({ userData }) => {
    return (
        <Box component="div" className='profile__section' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '0'
        }}>
            Availability Section
        </Box>
    );
};

export default AvailabilitySection;