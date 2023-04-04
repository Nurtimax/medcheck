import React, { useEffect } from 'react'
import { useModal } from '../../../utils/hooks/useModal'

import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material'

import closeOnlineEntry from '../../../assets/icons/close.svg'
import Select from '../../UI/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinicServices } from '../../../redux/slices/onlineEntrySlice'

import chooseSpecialist from '../../../assets/icons/chooseSpecialist.svg'

const ChooseServices = () => {
   const { isActive, setIsActiveModal } = useModal()

   const { services } = useSelector((state) => state.online_entry)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllClinicServices())
   }, [dispatch])

   return (
      <div>
         {['right'].map((item) => (
            <React.Fragment key={item}>
               <Drawer
                  anchor={item}
                  open={isActive === 'services'}
                  onClose={() => setIsActiveModal({})}
               >
                  <OnlineEntryStyled className="onlineEntry">
                     <div>
                        <img
                           onClick={() => setIsActiveModal({})}
                           src={closeOnlineEntry}
                           alt="close"
                        />
                     </div>
                     <p>Online запись</p>
                  </OnlineEntryStyled>

                  <ChooseServicesStyled className="servicesChoose">
                     Выбрать услуги
                  </ChooseServicesStyled>

                  <Select defaultValue={'Вакцинация'} options={services} />

                  <ChoiceServicesStyled
                     onClick={() => setIsActiveModal('specialist')}
                  >
                     <img src={chooseSpecialist} alt="specialist" />
                     <p>Выбрать специалиста</p>
                  </ChoiceServicesStyled>
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   )
}

export default ChooseServices

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

const ChooseServicesStyled = styled('p')(() => ({
   margin: '15px',
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
