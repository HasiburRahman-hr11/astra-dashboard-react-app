import React from 'react';
import { Box } from '@mui/material';
import { Description, Edit, ArrowForward } from '@mui/icons-material';

const ResumeSection = ({ userData, setUserData}) => {
    return (
        <Box component="div" className='profile__section' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Description sx={{ marginRight: '10px' }} />
                <p style={{
                    maxWidth: '250px',
                    overflow: 'hidden'
                }}>{userData?.resume ? userData?.resume?.name : 'Upload your resume'}</p>
            </Box>


            <label htmlFor="resume" style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
            }}>
                <Box component="p" className='edit__resume_toolkit' sx={{
                    backgroundColor: '#F2FBFF',
                    color: '#CDCDCD',
                    fontSize: '13px',
                    padding: '8px 12px',
                    border: '1px solid #F1FAFF',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '15px'
                }}>
                    <span>Let's start upload your resume</span>
                    <ArrowForward sx={{
                        marginLeft: '5px',
                        fontSize: '13px'
                    }} />
                </Box>
                <Edit sx={{ color: '#CDCDCD' }}/>
            </label>
            <input
                type="file"
                name="resume"
                id="resume"
                hidden
                onChange={(e) => setUserData({ ...userData, resume: e.target.files[0] })}
            />
        </Box>
    );
};

export default ResumeSection;