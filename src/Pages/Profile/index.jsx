import React, { useState } from 'react';
import { Box } from '@mui/material';
import ResumeSection from '../../Components/ResumeSection';
import UserInfoSection from '../../Components/UserInfoSection';
import ExperienceSection from '../../Components/ExperienceSection';
import AvailabilitySection from '../../Components/AvailabilitySection';
import EditProfileModal from '../../Components/EditProfileModal';

const Profile = () => {
    const [userData , setUserData] = useState({
        resume:'',
        userName:'John Doe',
        country:'Australia',
        email:'johndoe007@gmail.com',
        phone:'+355 434 234 242 3',
        linkedIn:'',
        gitHub:'',
        experience:'5 years',
        englishProficiency:'Average english proficiency',
        availability:'Full time'
    });

    const [modalOpen , setModalOpen] = useState(false);
    return (
        <div className='page__wrapper'>
            <Box component="div" sx={{
                borderRight:'1px solid #f5f5f5'
            }}>
                <ResumeSection userData={userData} setUserData={setUserData} />
                <UserInfoSection userData={userData} setModalOpen={setModalOpen} />
                <ExperienceSection userData={userData} setModalOpen={setModalOpen} />
                <AvailabilitySection userData={userData} setModalOpen={setModalOpen} />
            </Box>

            <EditProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} userData={userData} setUserData={setUserData} />
        </div>
    );
};

export default Profile;