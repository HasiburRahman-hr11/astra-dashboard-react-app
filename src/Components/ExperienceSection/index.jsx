import React from 'react';
import { Box, Grid } from '@mui/material';
import { Edit, Yard } from '@mui/icons-material';

const ExperienceSection = ({ userData , setModalOpen}) => {
    return (
        <Box component="div" className='profile__section' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Grid container spacing={4} sx={{
                marginRight:'30px'
            }}>
                <Grid item md={6} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Yard sx={{ fontSize: '17px', marginRight: '8px' }} />
                    Overall Experience
                </Grid>

                <Grid item md={6} sm={6} xs={12} sx={{
                    textAlign:{
                        sm:'right',
                        xs:'left'
                    },
                    fontSize:'14px'
                }}>
                    <Box component="p" sx={{
                        fontWeight:'600',
                        marginBottom:'5px'
                    }}>
                        {userData?.experience ? userData.experience : '7 years / 0 years remote'}
                    </Box>
                    <Box component="p">
                        {userData?.englishProficiency ? userData.englishProficiency : 'Average english proficiency'}
                    </Box>
                </Grid>


            </Grid>

            <Edit sx={{ color: '#CDCDCD', cursor: 'pointer'}} onClick={()=>setModalOpen(true)}/>
        </Box>
    );
};

export default ExperienceSection;