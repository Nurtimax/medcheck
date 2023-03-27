import * as React from 'react'
import { useNavigate } from 'react-router-dom'

import Drawer from '@mui/material/Drawer'
import Button from '../../UI/Button'
import { styled } from '@mui/material'

import closeOnlineEntry from '../../../assets/icons/close.svg'

import chooseServices from '../../../assets/icons/chooseServices.svg'
import chooseSpecialist from '../../../assets/icons/chooseSpecialist.svg'
import chooseTime from '../../../assets/icons/chooseTime.svg'
import { useSelector } from 'react-redux'
import { useModal } from '../../../utils/hooks/useModal'
import ChooseServices from '../SelectServices/ChooseServices'

const OnlineEntryDrawer = () => {
   const { isAuth } = useSelector((state) => state.auth)
   const { isActive, setIsActiveModal } = useModal()

   const navigate = useNavigate()

   const time = () => {
      navigate('/choose_time')
   }
   const backToHome = () => {
      navigate('/')
   }

   const blockOnlineEntry = () => {
      navigate('/sign_up')
   }

   return (
      <div>
         {['right'].map((item) => (
            <React.Fragment key={item}>
               <RecordButton
                  onClick={
                     isAuth
                        ? () => setIsActiveModal('drawer')
                        : blockOnlineEntry
                  }
               >
                  запись онлайн
               </RecordButton>

               <DrawerStyled anchor={item} open={isActive === 'drawer'}>
                  <OnlineEntryStyled className="onlineEntry">
                     <div onClick={backToHome}>
                        <img
                           onClick={() => setIsActiveModal({})}
                           src={closeOnlineEntry}
                           alt="close"
                        />
                     </div>
                     <p>Online запись</p>
                  </OnlineEntryStyled>

                  <SelectedServices>
                     <ChoiceServicesStyled
                        onClick={() => setIsActiveModal('services')}
                     >
                        <img src={chooseServices} alt="services" />
                        <p>Выбрать услуги</p>
                     </ChoiceServicesStyled>

                     <ChoiceServicesStyled>
                        <img src={chooseSpecialist} alt="specialist" />
                        <p>Выбрать специалиста</p>
                     </ChoiceServicesStyled>

                     <ChoiceServicesStyled onClick={time}>
                        <img src={chooseTime} alt="time" />
                        <p>Выбрать дату и время</p>
                     </ChoiceServicesStyled>
                  </SelectedServices>
               </DrawerStyled>
            </React.Fragment>
         ))}
         <ChooseServices />
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
}))

const ChoiceServicesStyled = styled('div')(() => ({
   height: '72px',
   display: 'flex',
   alignItems: 'center',
   background: 'white',
   margin: '6px',
   borderRadius: '16px',
   padding: '0 10px',
   cursor: 'pointer',
   gap: '10px',
}))
