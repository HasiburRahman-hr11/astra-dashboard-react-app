import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    bgcolor: 'background.paper',
    border: '1px solid #ddd',
    boxShadow: 24,
    p: 4,
    overflowY:'auto',
    maxHeight:'90vh'
};

export default function EditProfileModal({ modalOpen, setModalOpen, userData, setUserData }) {
    const handleClose = () => setModalOpen(false);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <Box sx={style}>
                        <Typography variant='h2' component="h2" sx={{
                            textAlign: 'center',
                            marginBottom: '40px',
                            fontSize: '25px'
                        }}>
                            Edit your profile
                        </Typography>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <TextField
                                id="userName"
                                label="Your full name"
                                variant="outlined"
                                sx={{ width: '100%' }}
                                value={userData.userName}
                                onChange={(e) => setUserData({ ...userData, userName: e.target.value })} />
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="country">Country</InputLabel>
                                <Select
                                    labelId="country"
                                    id="countrySelect"
                                    value={userData.country}
                                    label="Country"
                                    onChange={(e) => setUserData({ ...userData, country: e.target.value })}
                                >
                                    <MenuItem value="United States">United States</MenuItem>
                                    <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                    <MenuItem value="Australia">Australia</MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    <MenuItem value="India">India</MenuItem>
                                    <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <TextField
                                id="email"
                                label="Email address"
                                variant="outlined"
                                sx={{ width: '100%' }}
                                value={userData.email}
                                onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <TextField
                                id="phone"
                                label="Phone number"
                                variant="outlined"
                                sx={{ width: '100%' }}
                                value={userData.phone}
                                onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <TextField
                                id="linkedIn"
                                label="LinkedIn Profile"
                                variant="outlined"
                                type="url"
                                sx={{ width: '100%' }}
                                value={userData.linkedIn}
                                onChange={(e) => setUserData({ ...userData, linkedIn: e.target.value })} />
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <TextField
                                id="gitHub"
                                label="GitHub Profile"
                                variant="outlined"
                                type="url"
                                sx={{ width: '100%' }}
                                value={userData.gitHub}
                                onChange={(e) => setUserData({ ...userData, gitHub: e.target.value })} />
                        </Box>

                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="experience">Experience</InputLabel>
                                <Select
                                    labelId="experience"
                                    id="experienceSelect"
                                    value={userData.experience}
                                    label="Experience"
                                    onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
                                >
                                    <MenuItem value="1 year">1 year</MenuItem>
                                    <MenuItem value="2 years">2 years</MenuItem>
                                    <MenuItem value="3 years">3 years</MenuItem>
                                    <MenuItem value="4 years">4 years</MenuItem>
                                    <MenuItem value="5 years">5 years</MenuItem>
                                    <MenuItem value="5 years+">5 years+</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="englishProficiency">English Proficiency</InputLabel>
                                <Select
                                    labelId="englishProficiency"
                                    id="englishProficiencySelect"
                                    value={userData.englishProficiency}
                                    label="English Proficiency"
                                    onChange={(e) => setUserData({ ...userData, englishProficiency: e.target.value })}
                                >
                                    <MenuItem value="Average english proficiency">Average english proficiency</MenuItem>
                                    <MenuItem value="Fluent english proficiency">Fluent english proficiency</MenuItem>
                                    <MenuItem value="Excellent english proficiency">Excellent english proficiency</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>


                        <Box component="div" sx={{ marginBottom: '20px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="availability">Availability</InputLabel>
                                <Select
                                    labelId="availability"
                                    id="availabilitySelect"
                                    value={userData.availability}
                                    label="English Proficiency"
                                    onChange={(e) => setUserData({ ...userData, availability: e.target.value })}
                                >
                                    <MenuItem value="Part time">Part time</MenuItem>
                                    <MenuItem value="Full time">Full time</MenuItem>
                                    <MenuItem value="Internship">Internship</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box component="div" sx={{
                            textAlign:'center'
                        }}>
                            <Button onClick={handleClose} sx={{
                                backgroundColor:'#000',
                                padding:'10px 20px',
                                color:'#fff',
                                borderRadius:'5px',
                                '&:hover':{
                                    backgroundColor:'#000',
                                }
                            }}>Submit</Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
