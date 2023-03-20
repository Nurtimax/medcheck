import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../table/Table'
import Button from '../UI/Button'

const ExpertsCrud = () => {
   return (
      <Div>
         <ExpertCrudStyled>
            <Nav>
               <Speciality>Специалисты</Speciality>
               <AddExperts to="/add_experts">
                  <MyBtn variant="contained">+ Добавить специалиста</MyBtn>
               </AddExperts>
            </Nav>
            <Table />
         </ExpertCrudStyled>
      </Div>
   )
}
export default ExpertsCrud

const Div = styled('div')(() => ({
   background: '#E0E0E0',
   height: '100%',
   minHeight: '1000px',
}))

const ExpertCrudStyled = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',
}))

const Nav = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '60px',
   paddingTop: '30px',
}))
const Speciality = styled('p')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '22px',
   lineHeight: '30px',
   color: '#222222',
}))
const MyBtn = styled(Button)(() => ({
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '10px',
   width: '259px',
   height: '44px',
   alignItems: 'center',
}))
const AddExperts = styled(Link)(() => ({
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '10px',
   width: '259px',
   height: '44px',
   alignItems: 'center',
}))
