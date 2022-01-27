import React from 'react';
import { Box } from '@mui/material';
import { Description, Edit } from '@mui/icons-material';

const ResumeSection = ({ userData , setUserData}) => {
    return (
        <div className='profile__section'>
            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Description sx={{ marginRight: '10px' }} />
                <p style={{
                    maxWidth:'250px',
                    overflow:'hidden'
                }}>{userData?.resume ? userData?.resume?.name : 'Upload your resume'}</p>
            </Box>


            <label htmlFor="resume">
                <Edit sx={{ color: '#CDCDCD', cursor: 'pointer' }} />
            </label>
            <input 
            type="file" 
            name="resume" 
            id="resume" 
            hidden 
            onChange={(e)=> setUserData({...userData, resume:e.target.files[0]})}
            />
        </div>
    );
};

export default ResumeSection;