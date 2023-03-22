import React from 'react'
import { Menu, MenuItem, styled } from '@mui/material'
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
import { Link } from 'react-router-dom'

const Header = () => {
   const { isAuth } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

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
               <InputSearching type="text" placeholder="Поиск по сайту " />
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
                  <a href="https://www.whatsapp.com/?lang=ru">
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
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  src={isAuth ? userProfileLogo || subtract : subtract}
                  alt="profLogo"
               />

               <Styledmenu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  keepMounted
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  {isAuth ? (
                     <div>
                        <MenuItemStyled>
                           <Link to="/user" className="authorized">
                              Мои записи
                           </Link>
                        </MenuItemStyled>
                        <MenuItemStyled>
                           <div className="authorized">Профиль</div>
                        </MenuItemStyled>
                        <MenuItemStyled>
                           <div
                              className="authorized"
                              onClick={() => dispatch(removeUser())}
                           >
                              Выйти
                           </div>
                        </MenuItemStyled>
                     </div>
                  ) : (
                     <div>
                        <MenuItemStyled>
                           <CustomLinkStyle to="/sign_in">
                              Войти
                           </CustomLinkStyle>
                        </MenuItemStyled>

                        <MenuItemStyled>
                           <CustomLinkStyle to="/sign_up">
                              Регистрация
                           </CustomLinkStyle>
                        </MenuItemStyled>
                     </div>
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
               <CustomLinkStyle to="/about_clinic">О клинике</CustomLinkStyle>
               <CustomLinkStyle to="/services">Услуги</CustomLinkStyle>
               <CustomLinkStyle to="/doctors">Врачи</CustomLinkStyle>
               <CustomLinkStyle to="/price">Прайс</CustomLinkStyle>
               <CustomLinkStyle to="/feedbacks">Отзывы</CustomLinkStyle>
               <CustomLinkStyle to="/contacts">Контакты</CustomLinkStyle>
            </NavigatePages>
            <GetResults>получить результаты</GetResults>
            <RecordButton>запись онлайн</RecordButton>
         </SecondRow>
      </HeaderContainer>
   )
}

const HeaderContainer = styled('header')(() => ({
   width: '100%',
   backgroundColor: '#ffffff',
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
   borderBottom: '1px solid #c0bdbd',
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
   backgroundColor: '#f3f1f1',
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
   gap: '10px',
   fontSize: '14px',
   fontWeight: '500',
   fontFamily: '"Manrope" , sans-serif',
}))

const RecordButton = styled(Button)(() => ({
   width: '200px',
   height: '44px',
   border: 'none',
   background: 'linear-gradient(#0cbb6b, #027b44)',

   borderRadius: '25px',
   cursor: 'pointer',
   textTransform: 'uppercase',
   color: '#ffffff',
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

const MenuItemStyled = styled(MenuItem)(() => ({
   '& .authorized': {
      color: 'black',
   },
   '& .authorized:hover': {
      color: 'green',
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
}))

export default Header
