import React from 'react';
import { Box, Grid } from '@mui/material';
import { Edit, Email, Phone, LinkedIn, GitHub } from '@mui/icons-material';

const UserInfoSection = ({ userData }) => {
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
                        {userData?.userName ? '' : 'John'}
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
                            {userData?.country ? userData.country : 'Albania'}
                        </Box>
                    </Box>
                </Box>

                <Edit sx={{ color: '#CDCDCD', cursor: 'pointer' }} />
            </Box>


            <Grid container spacing={3}>
                <Grid item md={4} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Email sx={{ fontSize: '17px', marginRight: '8px' }} />
                    {userData?.email ? userData.email : 'johndoe007@gmail.com'}
                </Grid>

                <Grid item md={4} sm={6} xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Phone sx={{ fontSize: '17px', marginRight: '8px' }} />
                    {userData?.phone ? userData.phone : '+355 434 234 242 3'}
                </Grid>

                <Grid item md={2} sm={4} xs={4} sx={{
                    textAlign:'right'
                }}>
                    <a href={userData?.linkedIn ? userData?.linkedIn : ''} target="_blank" rel="noopener noreferrer" style={{
                        cursor: userData?.linkedIn ? 'pointer' : 'not-allowed'
                    }}>
                        <LinkedIn sx={{ fontSize: '17px'}} />
                    </a>
                </Grid>

                <Grid item md={2} sm={4} xs={4} sx={{
                    textAlign:'right',
                    paddingRight:'30px'
                }}>
                    <a href={userData?.gitHub ? userData?.gitHub : ''} target="_blank" rel="noopener noreferrer" style={{
                        cursor: userData?.linkedIn ? 'pointer' : 'not-allowed'
                    }}>
                        <GitHub sx={{ fontSize: '17px'}} />
                    </a>
                </Grid>

            </Grid>
        </div>
    );
};

export default UserInfoSection;