import * as React from 'react'

import Drawer from '@mui/material/Drawer'
import Button from '../../UI/Button'
import { styled } from '@mui/material'

import closeOnlineEntry from '../../../assets/icons/close.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/constants/data'

const OnlineEntryDrawer = ({ toggleDrawer, drawer, handleClick }) => {
   return (
      <div onClick={() => handleClick}>
         {['right'].map((item) => (
            <React.Fragment key={item}>
               <RecordButton onClick={toggleDrawer(item, true)}>
                  запись онлайн
               </RecordButton>
               <DrawerStyled anchor={item} open={drawer[item]}>
                  <OnlineEntryStyled className="onlineEntry">
                     <img
                        onClick={toggleDrawer(item, false)}
                        src={closeOnlineEntry}
                        alt="close"
                     />
                     <p>Online запись</p>
                  </OnlineEntryStyled>

                  <SelectedServices>
                     <Link to={ROUTES.SERVICES_CLINIC}>services</Link>
                     <Link to={ROUTES.SPECIALITY}> specialist</Link>
                     <Link to={ROUTES.CHOOSE_TIME}>choose time</Link>
                  </SelectedServices>
               </DrawerStyled>
            </React.Fragment>
         ))}
      </div>
   )
}

export default OnlineEntryDrawer

const DrawerStyled = styled(Drawer)(() => ({}))

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

const OnlineEntryStyled = styled('div')(() => ({
   display: 'flex',
   width: '380px',
   height: '56px',
   justifyContent: 'center',
   alignItems: 'center',
   color: '#048741',
   fontWeight: '700',

   '& img': {
      position: 'absolute',
      top: '22px',
      left: '22px',
      width: '14px',
      height: '14px',
      cursor: 'pointer',
   },
}))

const SelectedServices = styled('div')(() => ({
   width: '380px',
   height: '100%',
   background: '#F3F1F1',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))
