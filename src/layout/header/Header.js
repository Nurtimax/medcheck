import React from 'react'
import { Menu, styled } from '@mui/material'
import iconLocation from '../../assets/icons/GeoPoint.svg'
import iconHour from '../../assets/icons/Hour.svg'
import iconSearching from '../../assets/icons/searching.svg'
import iconPhoneNumber from '../../assets/icons/iconTelephone.svg'
import iconInstagram from '../../assets/icons/whatsApp.svg'
import iconTelegram from '../../assets/icons/instagram.svg'
import iconWhatsApp from '../../assets/icons/telegram.svg'
import iconMedCheck from '../../assets/icons/medCheck.svg'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import subtract from '../../assets/icons/subtract.svg'
import Button from '../../components/UI/Button'
import CustomLink from '../../components/UI/Custom.Link'
import { useDispatch, useSelector } from 'react-redux'
import { postSignUp, removeUser } from '../../redux/slices/authSlice'

import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import OnlineEntryDrawer from '../../components/OnlineEntry/Drawer/OnlineEntryDrawer'

const Header = () => {
   const { isAuth } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const [anchorEl, setAnchorEl] = React.useState(null)

   const [searchParams, setSearchParams] = useSearchParams()

   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const toggleDrawer = (anchor, open) => () => {
      setDrawer({ ...drawer, [anchor]: open })
      setSearchParams({ [anchor]: open })
   }
   const [drawer, setDrawer] = React.useState({
      right: false,
   })

   useEffect(() => {
      setDrawer({ right: Boolean(searchParams.get('right')) })
   }, [])

   useEffect(() => {
      if (isAuth) {
         dispatch(postSignUp())
      }
   }, [dispatch, postSignUp])

   const userProfileLogo = localStorage.getItem('USER_PHOTO')

   return (
      <HeaderContainer>
         <FirstRow>
            <InFirstRow1>
               <ForPosition1>
                  <img src={iconLocation} alt="location" />
                  106452, г. Бишкек, Гражданская 119
               </ForPosition1>
               <ForPosition2>
                  <img src={iconHour} alt="hour" />
                  <Span> пн-сб</Span> 08:00 до 18:00
               </ForPosition2>
            </InFirstRow1>
            <InFirstRow2>
               <InputSearching type="text" placeholder="Поиск по сайту" />
               <Searching src={iconSearching} alt="searching" />
            </InFirstRow2>
            <InFirstRow4>
               <div>
                  <a href="https://www.instagram.com/">
                     <img src={iconInstagram} alt="whatsApp" />
                  </a>
               </div>
               <div>
                  <a href="https://web.telegram.org/k/">
                     <img src={iconTelegram} alt="instagram" />
                  </a>
               </div>
               <div>
                  <a href="http://wa.me/+996700920550">
                     <img src={iconWhatsApp} alt="telegram" />
                  </a>
               </div>
            </InFirstRow4>
            <InFirstRow3>
               <PhoneNumber src={iconPhoneNumber} alt="phone" />
               <p>+996(800) 000 000 +996(505) 000 000</p>
            </InFirstRow3>
            <InFirstRow5>
               <img
                  className="profileLogo"
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  src={isAuth ? userProfileLogo || subtract : subtract}
                  alt="profLogo"
               />
               <Styledmenu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={open}
                  keepMounted
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  {isAuth ? (
                     <AuthStyled>
                        <Link
                           onClick={handleClose}
                           className="authorized"
                           to="user"
                        >
                           Мои записи
                        </Link>
                        <Link
                           onClick={handleClose}
                           className="authorized"
                           to="user_profile/personal_data"
                        >
                           Профиль
                        </Link>
                        <Link
                           className="authorized"
                           onClick={() => dispatch(removeUser())}
                        >
                           Выйти
                        </Link>
                     </AuthStyled>
                  ) : (
                     <AuthStyled>
                        <Link
                           onClick={handleClose}
                           className="authorized"
                           to="/sign_in"
                        >
                           Войти
                        </Link>
                        <Link
                           onClick={handleClose}
                           className="authorized"
                           to="/sign_up"
                        >
                           Регистрация
                        </Link>
                     </AuthStyled>
                  )}
               </Styledmenu>
            </InFirstRow5>
         </FirstRow>
         <SecondRow>
            <ProjectLogos>
               <Link to="/">
                  <img src={logoMedCheck} alt="logo" />
               </Link>
               <Link to="/">
                  <img src={iconMedCheck} alt="medCheck" />
               </Link>
            </ProjectLogos>
            <NavigatePages>
               <CustomLinkStyle to={isAuth ? '/about_clinic' : '/sign_up'}>
                  О клинике
               </CustomLinkStyle>
               <CustomLinkStyle to={isAuth ? '/services' : '/sign_up'}>
                  Услуги
               </CustomLinkStyle>
               <CustomLinkStyle to={isAuth ? '/doctors' : '/sign_up'}>
                  Врачи
               </CustomLinkStyle>
               <CustomLinkStyle to={isAuth ? '/price' : '/sign_up'}>
                  Прайс
               </CustomLinkStyle>

               <CustomLinkStyle to={isAuth ? '/contacts' : '/sign_up'}>
                  Контакты
               </CustomLinkStyle>
            </NavigatePages>
            <GetResults>получить результаты</GetResults>
            <div>
               <OnlineEntryDrawer drawer={drawer} toggleDrawer={toggleDrawer}>
                  запись онлайн
               </OnlineEntryDrawer>
            </div>
         </SecondRow>
      </HeaderContainer>
   )
}

export default Header

const HeaderContainer = styled('header')(() => ({
   width: '100%',
   backgroundColor: '#FFFFFF',
   position: 'fixed',
   top: '0',
   left: '0',
   zIndex: '20',
   fontFamily: '"Manrope" , sans-serif',
}))
const FirstRow = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   margin: ' 0 auto',
   width: '80%',
   alignItems: 'center',
   padding: '20px 0 20px 0',
   borderBottom: '1px solid #C0BDBD',
}))
const InFirstRow1 = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-start',
}))
const Span = styled('span')(() => ({
   color: '#009344',
}))
const ForPosition1 = styled('div')(() => ({
   '& img': {
      marginRight: '11px',
      marginLeft: '2px',
   },
}))
const ForPosition2 = styled('div')(() => ({
   '& img': {
      marginRight: '7px',
   },
}))
const InFirstRow2 = styled('div')(() => ({
   width: '300px',
   height: '30px',
   backgroundColor: '#F3F1F1',
   padding: '3px 0',
   borderRadius: '20px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
}))
const InputSearching = styled('input')(() => ({
   width: '250px',
   border: 'none',
   outline: 'none',
   backgroundColor: 'inherit',
}))
const Searching = styled('img')(() => ({
   width: '17px',
   height: '17px',
   cursor: 'pointer',
}))
const InFirstRow3 = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '8px',
   width: '200px',
}))
const PhoneNumber = styled('img')(() => ({
   width: '17px',
   height: '17px',
   marginBottom: '13px',
   cursor: 'pointer',
}))
const InFirstRow4 = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   '& div': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#048741',
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      cursor: 'pointer',
      '& a': {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      },
   },
}))
const SecondRow = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   margin: '0 auto',
   width: '80%',
   marginTop: '10px',
}))
const ProjectLogos = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
}))
const NavigatePages = styled('nav')(() => ({
   display: 'flex',
   gap: '19px',
   fontSize: '14px',
   fontWeight: '500',
   fontFamily: '"Manrope" , sans-serif',
}))
const GetResults = styled(Button)(() => ({
   border: '1px solid #048741 ',
   borderRadius: '24px',
   color: '#048741',
   width: '205',
   height: '43px',
}))
const InFirstRow5 = styled('div')(() => ({
   cursor: 'pointer',
   '& .profileLogo': {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
   },
}))
const CustomLinkStyle = styled(CustomLink)(() => ({
   textDecoration: 'none',
   listStyle: 'none',
   cursor: 'pointer',
   color: '#222222',
   '&:hover': {
      color: '#027B44',
   },
}))

const Styledmenu = styled(Menu)(() => ({
   '& .MuiMenuItem-root': {
      color: '#000000',
      transitionDuration: '0.3s',
   },
   '& .authorized': {
      color: 'black',
      textDecoration: 'none',
   },
   '& .authorized:hover': {
      color: 'green',
   },
}))

const AuthStyled = styled('div')(() => ({
   width: 'auto',
   height: 'auto',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',
   padding: '8px',
}))
