import React from 'react'
import styled from 'styled-components'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'
import medCheckIcon from '../../assets/icons/MedCheck.svg'

const AdminHeader = () => {
   return (
      <Header>
         <ProjectLogos>
            <img src={logoMedCheck} alt="logo" />
            <img src={medCheckIcon} alt="medCheck" />
         </ProjectLogos>
         <Record>
            <OnlineRecord>Онлайн-запись</OnlineRecord>

            <OnlineRecord2>Заявки</OnlineRecord2>
         </Record>
         <select style={{ border: 'none', outline: 'none' }} name="" id="">
            <option value="  Администратор"> Администратор</option>
            <option value="  Администратор"> Администратор 2</option>
            <option value="  Администратор"> Администратор 3</option>
            <option value="  Администратор"> Администратор 4</option>
            <option value="  Администратор"> Администратор 5</option>
         </select>
      </Header>
   )
}

const Header = styled.header`
   display: flex;
   background-color: #ffffff;
   justify-content: space-around;
   align-items: center;
   width: 100%;
   margin-top: 10px;
`

const OnlineRecord = styled.div`
   color: #707070;

   :hover {
      border-bottom: 2px solid #048741;
      color: #222222;
   }
`
const OnlineRecord2 = styled.div`
   color: #707070;
   :hover {
      border-bottom: 2px solid #048741;
      color: #222222;
   }
`

const Record = styled.div`
   margin-top: 30px;
   height: 50px;
   display: flex;
   /* align-items: center; */
   /* background-color: red; */
   gap: 76px;
`

const ProjectLogos = styled.div`
   display: flex;
   gap: 10px;
   align-items: center;
`

export default AdminHeader
