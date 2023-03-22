import React from 'react'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import medCheckIcon from '../../assets/icons/medCheck.svg'
import { styled } from '@mui/material'
import AdminLink from '../../components/UI/Custom.Link'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
   return (
      <Header>
         <ProjectLogos>
            <Link className="logo" to="/admin/online_entry">
               <img src={logoMedCheck} alt="logo" />
            </Link>
            <Link className="logo" to="/admin/online_entry">
               <img src={medCheckIcon} alt="medCheck" />
            </Link>
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
   zIndex: '20',
   margin: '0',
}))
const AdminLinkStyle = styled(AdminLink)(() => ({
   color: ' #707070',
   cursor: 'pointer',
   textDecoration: 'none',

   '&:hover': {
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
