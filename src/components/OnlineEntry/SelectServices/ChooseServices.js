import React, { useEffect } from 'react'
import { useModal } from '../../../utils/hooks/useModal'

import Drawer from '@mui/material/Drawer'
import { styled } from '@mui/material'

import closeOnlineEntry from '../../../assets/icons/close.svg'
import Select from '../../UI/Select'
import { useDispatch, useSelector } from 'react-redux'
import { getAllClinicServices } from '../../../redux/slices/onlineEntrySlice'

const ChooseServices = () => {
   const { isActive, setIsActiveModal } = useModal()

   const { services } = useSelector((state) => state.onlineEntry)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllClinicServices())
   }, [])

   return (
      <div>
         {['right'].map((item) => (
            <React.Fragment key={item}>
               <Drawer
                  anchor={item}
                  open={isActive === 'services'}
                  onClose={() => setIsActiveModal({})}
               >
                  <OnlineEntryStyled>
                     <div onClick={() => setIsActiveModal('drawer')}>
                        <img
                           onClick={() => setIsActiveModal({})}
                           src={closeOnlineEntry}
                           alt="close"
                        />
                     </div>
                     <p>Online запись</p>
                  </OnlineEntryStyled>

                  <p>Выбрать услуги</p>
                  <Select defaultValue={'hello romazan'} options={services} />
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
