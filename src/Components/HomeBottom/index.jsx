import React from 'react';
import { Box, Grid } from '@mui/material';

import homeImg from '../../images/astra.png'


const styles = {
    listItem: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
        fontSize: '14px',
        color: '#666'
    },
    listCounter: {
        backgroundColor: '#999999',
        color: '#fff',
        width: '18px',
        height: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        fontSize: '12px',
    }
}

const HomeBottom = () => {
    return (
        <Box component="div" className='home__bottom' sx={{
            padding: '20px 20px'
        }}>
            <Box component="div" sx={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                backgroundColor: '#fff',
                padding: '30px 20px'
            }}>
                <Grid container spacing={5}>
                    <Grid item md={5} sm={12}>
                        <img src={homeImg} alt="Why Join" />
                    </Grid>
                    <Grid item md={7} sm={12}>
                        <Box component="h3" sx={{
                            fontSize: '20px',
                            marginBottom: '10px',
                            fontWeight: 'normal'
                        }}>
                            Why Join
                        </Box>
                        <Box component="ul">
                            <Box component="li" sx={styles.listItem}>
                                <Box component="p" sx={{
                                    minWidth: '20px',
                                    marginRight: '10px',
                                }}>
                                    <Box component="span" sx={styles.listCounter}>1</Box>
                                </Box>
                                <Box component="p">
                                    Work full-time at top Silicon Valley or other U.S companies.
                                </Box>
                            </Box>
                            <Box component="li" sx={styles.listItem}>
                                <Box component="p" sx={{
                                    minWidth: '20px',
                                    marginRight: '10px',
                                }}>
                                    <Box component="span" sx={styles.listCounter}>2</Box>
                                </Box>
                                <Box component="p">
                                    Earn a better salary compare to local companies in your city.
                                </Box>
                            </Box>
                            <Box component="li" sx={styles.listItem}>
                                <Box component="p" sx={{
                                    minWidth: '20px',
                                    marginRight: '10px',
                                }}>
                                    <Box component="span" sx={styles.listCounter}>3</Box>
                                </Box>
                                <Box component="p">
                                    Grow as a developer by working with the smartest engineers form all over the world.
                                </Box>
                            </Box>
                            <Box component="li" sx={styles.listItem}>
                                <Box component="p" sx={{
                                    minWidth: '20px',
                                    marginRight: '10px',
                                }}>
                                    <Box component="span" sx={styles.listCounter}>4</Box>
                                </Box>
                                <Box component="p">
                                    Get paid monthly directly in your bank account. Forget about issues with PayPal or Payoneer.
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeBottom;