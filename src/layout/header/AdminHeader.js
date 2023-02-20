import React from 'react'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import medCheckIcon from '../../assets/icons/MedCheck.svg'
import { styled } from '@mui/material'
import AdminLink from '../../components/UI/Custom.Link'

const AdminHeader = () => {
   return (
      <Header>
         <ProjectLogos>
            <img src={logoMedCheck} alt="logo" />
            <img src={medCheckIcon} alt="medCheck" />
         </ProjectLogos>
         <Record>
            <AdminLinkStyle to="/admin/online_entry">
               Онлайн-запись
            </AdminLinkStyle>

            <AdminLinkStyle to="/admin/applications">Заявки</AdminLinkStyle>
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

export default AdminHeader
