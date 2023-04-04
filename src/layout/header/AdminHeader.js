import React from 'react'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import medCheckIcon from '../../assets/icons/medCheck.svg'
import { Menu, MenuItem, styled } from '@mui/material'
import AdminLink from '../../components/UI/Custom.Link'
import { Link } from 'react-router-dom'
import { removeAdmin } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const AdminHeader = () => {
   const dispatch = useDispatch()

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
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
         <StyledButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
         >
            Администратор
         </StyledButton>

         <Menu
            style={{ marginTop: '5px' }}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            <MenuItem
               style={{ width: '150px', height: '20px' }}
               onClick={() => dispatch(removeAdmin())}
            >
               Выйти
            </MenuItem>
         </Menu>
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

const StyledButton = styled('button')(() => ({
   width: '150px',
   padding: '5px',
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   border: 'none',
   borderRadius: '5px',
   color: 'white',
   cursor: 'pointer',
}))
