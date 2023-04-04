import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ContainerEntry from '../UI/ContainerEntry'
import { styled } from '@mui/material'
import { getAllPatients } from '../../redux/slices/patientsSlice'

const ApplicationsTable = () => {
   const { allPatients } = useSelector((state) => state.patients)
   console.log(allPatients)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllPatients())
   }, [])

   return (
      <Div>
         <ExpertCrudStyled>
            <Nav>
               <Speciality>Пациенты</Speciality>
            </Nav>

            <ContainerEntry></ContainerEntry>
         </ExpertCrudStyled>
      </Div>
   )
}
export default ApplicationsTable

const Nav = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '40px',
   paddingTop: '20px',
}))

const ExpertCrudStyled = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',
}))

const Speciality = styled('div')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '22px',
   lineHeight: '30px',
   color: '#222222',
   cursor: 'pointer',
}))

const Div = styled('div')(() => ({
   background: '#E0E0E0',
   height: '100%',
   minHeight: '1000px',
}))
