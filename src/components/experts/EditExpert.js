import TextEditor from '../UI/TextEditor'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import { styled } from '@mui/material'
import LinkToSpeciality from '../UI/Custom.Link'

import { putExpertRequest } from '../../redux/slices/expertSlice'
import ChangePhotoProfile from '../UI/ChangePhotoProfile'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../UI/LodaingSpinner'

const EditExperts = ({
   id,
   expertFirstName,
   expertLastName,
   expertPosition,
   expertImage,
   expertInformation,
   serviceName,
}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { isLoading } = useSelector((state) => state.addExpert)

   const { handleChange, handleSubmit, values, setFieldValue, resetForm } =
      useFormik({
         initialValues: {
            expertFirstName,
            expertLastName,
            expertPosition,
            expertInformation,
            expertImage,
            serviceName,
         },

         onSubmit: (values) => {
            dispatch(putExpertRequest({ id, values }))
            resetForm()
            navigate('/admin/speciality')
         },
      })

   const changeExpertINformation = (value) => {
      setFieldValue('expertInformation', value)
   }

   return (
      <AddExpertsStyled>
         {isLoading && <LoadingSpinner />}
         <Container>
            <LinkToSpecialityStyled to="/admin/speciality">
               Специалисты <i className="right"></i>
            </LinkToSpecialityStyled>
            <Text>
               <p> {expertFirstName}</p>
               <p> {expertLastName}</p>
            </Text>
         </Container>
         <span>Личные данные</span>
         <ContainerForm onSubmit={handleSubmit}>
            <DoctorImg>
               <ChangePhotoProfile
                  url={expertImage}
                  foto={values.expertImage}
                  setFoto={setFieldValue}
               />
               <p className="text">
                  Нажмите для добавления <br /> фотографии
               </p>
            </DoctorImg>
            <Form>
               <p>Добавление специалиста</p>
               <FirstForm>
                  <div>
                     <div>
                        <label htmlFor="name">Имя</label>
                        <br />
                        <InputStyle
                           type="text"
                           name="expertFirstName"
                           value={values.expertFirstName}
                           onChange={handleChange}
                        />
                     </div>
                     <br />
                     <div>
                        <label htmlFor="name">Отделение</label> <br />
                        <InputStyle
                           type="text"
                           name="serviceName"
                           value={serviceName}
                        />
                     </div>
                  </div>
                  <div>
                     <div>
                        <label htmlFor="name">Фамилия</label>
                        <br />
                        <InputStyle
                           type="select"
                           name="expertLastName"
                           value={values.expertLastName}
                           onChange={handleChange}
                        />
                     </div>
                     <br />
                     <div>
                        <label htmlFor="name">Должность</label>
                        <br />
                        <InputStyle
                           name="expertPosition"
                           value={values.expertPosition}
                           onChange={handleChange}
                        />
                     </div>
                  </div>
               </FirstForm>
               <TextEditorStyled
                  content={expertInformation}
                  value={values.expertInformation}
                  onChange={changeExpertINformation}
                  className="textEditor"
                  type="text"
                  name="expertInformation"
               />
               <MyBtn>
                  <LinkToSpec to="/admin/speciality">
                     <Button width="240px" height="40px" variant="outlined">
                        Отменить
                     </Button>
                  </LinkToSpec>
                  <AddButton type="submit" variant="contained">
                     Сохранить
                  </AddButton>
               </MyBtn>
            </Form>
         </ContainerForm>
      </AddExpertsStyled>
   )
}
export default EditExperts

const AddExpertsStyled = styled('div')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   paddingLeft: '70px',
   paddingRight: '70px',
   background: '#E0E0E0',
   height: '100%',
   minHeight: '1000px',

   ' & i': {
      border: 'solid #959595',
      borderWidth: '0 2px 2px 0',
      display: 'inline-block',
      padding: '2px',
      alignItems: 'center',
   },
   ' & span': {
      fontSize: '22px',
      lineHeight: '30px',
   },
}))

const Container = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '10px',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '19px',
   paddingTop: '30px',
   zIndex: '0',

   ' & .right': {
      transform: 'rotate(-45deg)',
      '-webkit-transform': 'rotate(-45deg)',
      zIndex: '0',
   },
}))

const LinkToSpecialityStyled = styled(LinkToSpeciality)(() => ({
   textDecoration: 'none',
   color: '#959595',

   '&: active': {
      color: '#048741',
   },
}))

const Text = styled('p')(() => ({
   color: '#048741',
   display: ' flex',
   gap: '3px',
}))

const ContainerForm = styled('form')(() => ({
   display: 'flex',
   gap: '100px',
   padding: '30px 70px 0px 40px',
   marginTop: '30px',
   background: '#FFFFFF',
}))

const FirstForm = styled('div')(() => ({
   display: 'flex',
   gap: '50px',
}))

const DoctorImg = styled('div')(() => ({
   '& .img': {
      width: '140px',
      height: '140px',
      borderRadius: '50%',
      background: 'rgba(224, 226, 231, 0.5)',
      border: '1px solid #E0E2E7',
      boxSizing: 'border-box',
   },
   '& .icon': {
      padding: '55px',
      cursor: 'pointer',
   },
   '& .text': {
      fontSize: '12px',
      color: '#909CB5',
      textAlign: 'center',
      whiteSpace: 'pre',
      cursor: 'pointer',
   },
}))
const Form = styled('div')(() => ({
   boxSizing: 'border-box',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '19px',
   alignItems: 'center',
   color: '#464444',
   zIndex: '0',
   '& p': {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '25px',
   },
   '& form': {
      display: 'flex',
      gap: '50px',
      boxSizing: 'border-box',
   },
}))
const TextEditorStyled = styled(TextEditor)(() => ({
   boxSizing: 'border-box',
   width: '200px',
}))
const InputStyle = styled(Input)(() => ({
   width: '390px',
   height: '38px',
   color: '#222222',
   fontFamily: 'Manrope',
   fontStyle: ' normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '22px',
}))

const LinkToSpec = styled(Link)(() => ({
   textDecoration: 'none',
}))

const AddButton = styled(Button)(() => ({
   width: '240px',
   height: '40px',
}))
const MyBtn = styled('div')(() => ({
   paddingTop: '70px',
   paddingBottom: '70px',
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '40px',
   textDecoration: 'none',
}))
