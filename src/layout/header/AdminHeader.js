import React from 'react'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import medCheckIcon from '../../assets/icons/medCheck.svg'
import { styled } from '@mui/material'
import AdminLink from '../../components/UI/Custom.Link'

const AdminHeader = () => {
   return (
      <Header>
         <ProjectLogos>
            <AdminLinkStyle to="/admin/online_entry">
               <img src={logoMedCheck} alt="logo" />
            </AdminLinkStyle>
            <AdminLinkStyle to="/admin/online_entry">
               <img src={medCheckIcon} alt="medCheck" />
            </AdminLinkStyle>
         </ProjectLogos>
         <Record>
            <AdminLinkStyle to="/admin/online_entry">
               Онлайн-запись
            </AdminLinkStyle>

            <AdminLinkStyle to="/admin/applications">Заявки</AdminLinkStyle>
            <AdminLinkStyle to="/admin/speciality">Специалисты</AdminLinkStyle>
            <AdminLinkStyle to="/admin/patients">Пациенты</AdminLinkStyle>
         </Record>
         <Select>
            <option value="Администратор"> Администратор</option>
            <option value="Администратор"> Администратор 2</option>
            <option value="Администратор"> Администратор 3</option>
            <option value="Администратор"> Администратор 4</option>
            <option value="Администратор"> Администратор 5</option>
         </Select>
      </Header>
   )
}

export default AdminHeader

const Header = styled('header')(() => ({
   display: 'flex',
   backgroundColor: ' #ffffff',
   justifyContent: 'space-around',
   alignItems: 'center',
   width: '100%',
   marginTop: '10px',
   position: 'fixed',
   margin: '0',
}))
const AdminLinkStyle = styled(AdminLink)(() => ({
   color: ' #707070',
   cursor: 'pointer',
   textDecoration: 'none',

   '&:hover': {
      borderBottom: '2px solid #048741',
      color: '#222222',
   },
}))

const Record = styled('div')(() => ({
   marginTop: '30px',
   height: '50px',
   display: 'flex',
   gap: '76px',
}))
const ProjectLogos = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',

   gap: '10px',
}))

const Select = styled('select')(() => ({
   border: 'none',
   outline: 'none',
   cursor: 'pointer',
}))
