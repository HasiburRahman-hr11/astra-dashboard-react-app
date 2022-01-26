import React from 'react';
import {Box} from '@mui/material';
import HomeTopLevel from '../HomeTopLevel';

const HomeTop = () => {
    return (
        <Box component="div" className='home__top' sx={{
            backgroundColor:'#FBFBFB',
            padding:'20px 20px',
            marginBottom:'50px'
        }}>
            <Box component="h2" sx={{
                fontSize:'23px',
                mb:'30px',
                fontWeight:'normal'
            }}>Welcome John!</Box>
            <Box component="p">How to get jobs with top U.S companies</Box>

            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop:'30px'
            }}>
                <HomeTopLevel counter="1" text1="Take 1" text2="Test" />
                <HomeTopLevel counter="2" text1="Pass Live" text2="Coding Challenge" />
                <HomeTopLevel counter="3" text1="Finalize Your " text2="Resume" />
                <HomeTopLevel counter="4" text1="Receive" text2="Job Offers" />
            </Box>
        </Box>
    );
};

export default HomeTop;