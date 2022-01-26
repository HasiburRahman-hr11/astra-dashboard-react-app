import React from 'react';
import { Box } from '@mui/material';

const HomeTopLevel = ({ counter, text1 , text2}) => {
    return (
        <Box component="div" sx={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '10px',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            width: '150px',
            marginRight:'20px'
        }}>
            <Box component="span" sx={{
                backgroundColor: '#999999',
                color: '#fff',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
            }}>{counter}</Box>

            <Box component="p" sx={{
                fontSize: '14px',
                color: '#999',
                marginTop:'15px'
            }}>
                {text1}
                <br />
                {text2}
            </Box>
        </Box>
    );
};

export default HomeTopLevel;