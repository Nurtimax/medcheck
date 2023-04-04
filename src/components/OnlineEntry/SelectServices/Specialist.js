import { Drawer, styled } from '@mui/material'
import React from 'react'
// import FreeDoctor from '../../../assets/icons/stuffFreeDoctor.svg'

// import chooseTime from '../../../assets/icons/chooseTime.svg'
// import chooseSpecialist from '../../../assets/icons/chooseSpecialist.svg'
import { useModal } from '../../../utils/hooks/useModal'

import closeOnlineEntry from '../../../assets/icons/close.svg'

const Specialist = () => {
   const { isActive, setIsActiveModal } = useModal()

   return (
      <div>
         {['right'].map((item) => (
            <React.Fragment key={item}>
               <Drawer
                  anchor={item}
                  open={isActive === 'specialist'}
                  onClose={() => setIsActiveModal({})}
               >
                  <OnlineEntryStyled>
                     <div>
                        <img
                           onClick={() => setIsActiveModal({})}
                           src={closeOnlineEntry}
                           alt="close"
                        />
                     </div>
                     <p>Online запись</p>
                  </OnlineEntryStyled>

                  <p>hello world</p>
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   )
}

export default Specialist

// const ChoiceServicesStyled = styled('div')(() => ({
//    height: '72px',
//    display: 'flex',
//    alignItems: 'center',
//    background: 'white',
//    margin: '6px',
//    borderRadius: '16px',
//    padding: '0 10px',
//    cursor: 'pointer',
//    gap: '10px',
// }))

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
