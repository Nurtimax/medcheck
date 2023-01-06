import React, { useState } from 'react'

import styled from 'styled-components'
import ReactDOM from 'react-dom'

import users from '../../assets/icons/Users.svg'
import phone from '../../assets/icons/phone.svg'
import sendRequest from '../../assets/icons/SendRequest.svg'

function Modal() {
   const [active, setActive] = useState(false)
   return ReactDOM.createPortal(
      <div>
         {active ? (
            <Container>
               <ModalContainer>
                  <Bixx onClick={() => setActive(false)}>
                     <img
                        width="15px"
                        src="https://freesvg.org/img/1544641784.png"
                        alt=""
                     />
                  </Bixx>
                  <Request>Оставьте заявку</Request>
                  <TextForRequest>
                     Оставьте свой номер и наши специалисты свяжутся с Вами
                     вближайшее время
                  </TextForRequest>
                  <ModalContainer2>
                     <div>
                        <p>Как к Вам обратиться?</p>
                        <Input1>
                           <img src={users} alt="users" />
                           <InputForUser
                              type="text"
                              placeholder="Введите имя"
                           />
                        </Input1>
                     </div>

                     <div>
                        <p>Номер мобильного телефона</p>
                        <Input2>
                           <img src={phone} alt="" />
                           <InputForUserPhone
                              type="number"
                              placeholder="+996 (___) __-__-__"
                           />
                        </Input2>
                     </div>
                  </ModalContainer2>
                  <StyledButtonRequest>
                     <p>ОТПРАВИТЬ ЗАЯВКУ</p>
                     <SendRequest src={sendRequest} alt="#" />
                  </StyledButtonRequest>
               </ModalContainer>
            </Container>
         ) : (
            <button onClick={() => setActive(true)}>open modal</button>
         )}
      </div>,
      document.getElementById('portal')
   )
}

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: rgb(0, 0, 0, 0.4);
`

const ModalContainer = styled.div`
   width: 40%;
   height: 400px;
   background-color: #ebf2fc;
   margin: 0 auto;
   border-radius: 20px;
`

const TextForRequest = styled.p`
   color: #222222;
   width: 70%;
   text-align: center;
   margin: 0 auto;
`

const Request = styled.p`
   margin-bottom: 20px;
   font-size: 36px;
   color: #222222;
   text-align: center;
`

const Input1 = styled.div`
   width: 200px;
   background-color: #ffffff;
   display: flex;
   justify-content: space-between;
   border: 1px solid #048741;
   border-radius: 3px;
   padding: 0 10px;

   img {
      cursor: pointer;
   }
`

const Input2 = styled.div`
   width: 200px;
   background-color: #ffffff;
   display: flex;
   padding: 0 10px;
   justify-content: space-around;
   border: 1px solid #048741;
   border-radius: 3px;

   img {
      cursor: pointer;
   }
`

const InputForUser = styled.input`
   outline: none;
   border: none;
   width: 88%;
   padding: 7px 0;
`

const ModalContainer2 = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 50px;
   gap: 10px;
   p {
      font-size: 12px;
      color: #4d4e51;
      margin: 3px 0;
   }
`

const InputForUserPhone = styled.input`
   outline: none;
   border: none;
   width: 88%;

   padding: 7px 0;
`

const SendRequest = styled.img`
   width: 20px;
   height: 20px;
   background-color: #13af5b;
   border-radius: 50%;
   cursor: pointer;
`

const StyledButtonRequest = styled.div`
   width: 217px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   background: linear-gradient(180.61deg, #0cbb6b 0.45%, #027b44 99.39%);
   border-radius: 24px;
   cursor: pointer;

   margin: 0 auto;

   margin-top: 50px;
   p {
      color: #ffffff;
   }
`

const Bixx = styled.div`
   display: flex;
   justify-content: flex-end;
   font-size: 30px;
   margin: 0 auto;
   margin: 10px;
   color: #959595;
   cursor: pointer;

   :hover {
      color: black;
   }
`

export default Modal
