import React, { useState } from 'react';
import { Box } from '@mui/material';
import ResumeSection from '../../Components/ResumeSection';
import UserInfoSection from '../../Components/UserInfoSection';
import ExperienceSection from '../../Components/ExperienceSection';
import AvailabilitySection from '../../Components/AvailabilitySection';

const Profile = () => {
    const [userData , setUserData] = useState({
        resume:'',
        userName:'',
        country:'',
        email:'',
        phone:'',
        linkedIn:'',
        gitHub:'',
        experience:'',
        englishProficiency:'',
        availability:''
    })
    return (
        <div className='page__wrapper'>
            <Box component="div" sx={{
                borderRight:'1px solid #f5f5f5'
            }}>
                <ResumeSection userData={userData} setUserData={setUserData} />
                <UserInfoSection userData={userData}/>
                <ExperienceSection userData={userData} />
                <AvailabilitySection userData={userData} />
            </Box>
        </div>
    );
};

export default Profile;