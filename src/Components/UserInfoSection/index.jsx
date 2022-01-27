import React from 'react';
import { Box, Grid } from '@mui/material';
import { Edit, Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const UserInfoSection = ({ userData, setModalOpen }) => {
    return (
        <div className='profile__section'>
            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '25px'
            }}>
                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box component="p" sx={{
                        backgroundColor: '#CCCCCC',
                        color: '#fff',
                        fontSize: '14px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '15px'
                    }}>
                        {userData?.userName ? userData?.userName?.split(' ')[0] : 'John'}
                    </Box>
                    <Box component="div">
                        <Box component="h4" sx={{
                            fontSize: '18px',
                            marginBottom: '10px',
                            fontWeight: 'normal'
                        }}>
                            {userData?.userName ? userData.userName : 'John Doe'}
                        </Box>
                        <Box component="p" sx={{
                            fontSize: '14px',
                        }}>
                            {userData.country}
                        </Box>
                    </Box>
                </Box>

                <Edit sx={{ color: '#CDCDCD', cursor: 'pointer' }} onClick={() => setModalOpen(true)} />
            </Box>


            <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Email sx={{ fontSize: '17px', marginRight: '8px' }} />
                    {userData.email}
                </Grid>

                <Grid item md={4} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Phone sx={{ fontSize: '17px', marginRight: '8px' }} />
                    {userData.phone}
                </Grid>

                <Grid item md={2} sm={6} xs={3} sx={{
                    textAlign: {
                        xs: 'left',
                        md: 'right'
                    }
                }}>
                    <a href={userData?.linkedIn ? userData?.linkedIn : ''} target="_blank" rel="noopener noreferrer" style={{
                        cursor: userData?.linkedIn ? 'pointer' : 'not-allowed'
                    }}>
                        <LinkedIn sx={{ fontSize: '17px' }} />
                    </a>
                </Grid>

                <Grid item md={2} sm={6} xs={3} sx={{
                    textAlign: {
                        xs: 'left',
                        md: 'right'
                    },
                    paddingRight: '30px'
                }}>
                    <a href={userData?.gitHub ? userData?.gitHub : ''} target="_blank" rel="noopener noreferrer" style={{
                        cursor: userData?.linkedIn ? 'pointer' : 'not-allowed'
                    }}>
                        <GitHub sx={{ fontSize: '17px' }} />
                    </a>
                </Grid>

            </Grid>
        </div>
    );
};

export default UserInfoSection;