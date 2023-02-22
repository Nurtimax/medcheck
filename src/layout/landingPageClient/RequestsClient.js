import Input from '../../components/UI/Input'

import sendRequestImg from '../../assets/images/imgRequest.jpg'

import users from '../../assets/icons/users.svg'
import phoneNumber from '../../assets/icons/phoneNumber.svg'
import Button from '../../components/UI/Button'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'

const RequestsClient = () => {
   return (
      <RequestClient>
         <div className="requestContainer">
            <p className="leaveRequest">Оставьте заявку</p>
            <p className="leaveRequestText">
               Оставьте свой номер и наши специалисты свяжутся с Вами в
               ближайшее время
            </p>

            <div className="clientDetailsContainer">
               <div className="clientDetails">
                  <p>Как к Вам обратиться?</p>
                  <div>
                     <img src={users} alt="users" />
                     <Input
                        type="text"
                        placeholder="Введите имя"
                        className="input"
                     />
                  </div>
               </div>
               <div className="clientDetails">
                  <p>Номер мобильного телефона</p>
                  <div>
                     <img src={phoneNumber} alt="phoneNumber" />
                     <Input
                        type="number"
                        placeholder="+996 (___) __-__-__"
                        className="input"
                     />
                  </div>
               </div>
            </div>
            <LinkToApplication to="/admin/applications">
               <Button variant="contained" className="sendRequest">
                  ОТПРАВИТЬ ЗАЯВКУ
               </Button>
            </LinkToApplication>
         </div>
         <img
            className="sendRequestImg"
            src={sendRequestImg}
            alt="sendRequestImg"
         />
      </RequestClient>
   )
}

const RequestClient = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',

   display: 'flex',
   alignItems: 'center',
   marginBottom: '70px',

   '& .requestContainer': {
      width: '700px',
      height: '400px',
      background: '#DBEBFF',
      padding: '40px 30px',
      marginTop: '150px',
      borderRadius: '20px',

      '& .leaveRequest': {
         fontSize: '36px',
         textAlign: 'center',
      },

      '& .leaveRequestText': {
         textAlign: 'center',
         fontSize: '18px',
         color: '#222222',
         marginTop: '15px',
      },
   },

   '& .clientDetails': {
      width: '260px',

      '& div': {
         display: 'flex',
         background: 'white',
         justifyContent: 'flex-start',
         padding: '0 10px',
         border: '1px solid rgba(0, 147, 68, 0.5)',
         borderRadius: '5px',

         '& .input': {
            border: 'none',
            width: '200px',
            height: '40px',
         },
      },

      '& p': {
         fontSize: '14px',
         color: '#4D4E51',
         textAlign: 'start',
         margin: '5px 1px',
      },
   },

   '& .clientDetailsContainer': {
      display: 'flex',
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
      gap: '25px',
      marginTop: '30px',
   },

   '& .sendRequest': {
      borderRadius: '25px',

      marginTop: '50px',
      marginLeft: '170px',
   },

   '& .sendRequestImg': {
      width: '700px',
      height: '445px',
      position: 'relative',
      top: '50px',
      right: '170px',
      zIndex: '10',
   },
}))

const LinkToApplication = styled(Link)(() => ({
   textDecoration: 'none',
}))
export default RequestsClient
