import { styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile, updateProfile } from '../../redux/slices/profileSlice'

// import Button from '../UI/Button'
// import Input from '../UI/Input'

const ProfileCrud = () => {
   const dispatch = useDispatch()
   const { profile } = useSelector((state) => state.profCrudUser)
   const { status } = useSelector((state) => state.profCrudUser)
   const { error } = useSelector((state) => state.profCrudUser)

   useEffect(() => {
      dispatch(fetchProfile())
   }, [dispatch])

   const handleUpdateProfile = (formData) => {
      dispatch(updateProfile(formData))
   }

   if (status === 'loading') {
      return <div>Loading...</div>
   }

   if (status === 'failed') {
      return <div>Error: {error}</div>
   }

   return (
      <Container>
         <h4>Ваши личные данные</h4>
         {profile && (
            <form onSubmit={handleUpdateProfile}>
               <p>{profile}</p>
               {/* <FirstRow>
                  <div>
                     <Typography className="personData">Имя</Typography>
                     <Input
                        type="text"
                        name="text"
                        className="inputs"
                        value={profile}
                     />
                  </div>
                  <div>
                     <Typography className="personData">Фамилия</Typography>
                     <Input type="text" name="text" className="inputs" />
                  </div>
               </FirstRow>
               <SecondRow>
                  <div>
                     <Typography className="personData">E-mail</Typography>
                     <Input name="email" type="email" className="inputs" />
                  </div>
                  <div>
                     <Typography className="personData">Телефон</Typography>
                     <Input name="number" type="number" className="inputs" />
                     <div className="buttonsContainer">
                        <Button className="backButton">назад</Button>
                        <Button className="editButton">Редактировать</Button>
                     </div>
                  </div>
               </SecondRow> */}
            </form>
         )}
      </Container>
   )
}

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProfile, updateProfile } from './profileSlice';

// function Profile() {
//   const dispatch = useDispatch();
//   const profile = useSelector((state) => state.profile.profile);
//   const status = useSelector((state) => state.profile.status);
//   const error = useSelector((state) => state.profile.error);

//   useEffect(() => {
//     dispatch(fetchProfile());
//   }, [dispatch]);

//   const handleUpdateProfile = (formData) => {
//     dispatch(updateProfile(formData));
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Profile</h2>
//       {profile && (
//         <form onSubmit={handleUpdateProfile}>
//           <input type="text" value={profile}/>

// </div>

const Container = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',
   marginBottom: '100px',

   '& .personData': {
      color: '#464444',
      fontSize: '14px',
   },

   '& .inputs': {
      width: '490px',
   },

   '& .css-bdlmo4-MuiButtonBase-root-MuiButton-root.MuiButton-contained': {
      width: '230px',
   },
   '& .buttonsContainer': {
      display: 'flex',
      gap: '17px',
      marginTop: '30px',
   },
   '& .backButton': {
      width: '230px',
      border: '1px solid #048741',
      color: '#048741',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Manrope" , sans-serif',
   },
   '& .backButton:hover': {
      color: '#FFFFFF',
   },

   '& .editButton': {
      width: '230px',
      border: '1px solid #048741',
      color: '#FFFFFF',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Manrope" , sans-serif',
      background: 'linear-gradient(#0CBB6B , #027B44)',
   },

   '& .editButton:hover': {
      color: '#FFFFFF',
   },
}))

// const FirstRow = styled('div')(() => ({
//    display: 'flex',
//    gap: '38px',
// }))
// const SecondRow = styled('div')(() => ({
//    display: 'flex',
//    gap: '38px',
// }))

export default ProfileCrud
