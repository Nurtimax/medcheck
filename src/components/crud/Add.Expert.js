import Button from '../components/UI/Button'
import ChangePhotoProfile from '../components/UI/ChangeFotoProfile'
import TextEditor from '.././components/UI/TextEditor'
import Input from '../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux'
import {
   getExpertRequest,
   postExpertRequest,
} from '../redux/slices/expertSlice'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import Select from './../components/UI/Select'
import { styled } from '@mui/material'
const AddExperts = () => {
   const { experts } = useSelector((state) => state.addExpert)
   console.log(experts)
   const dispatch = useDispatch()
   const { handleChange, handleSubmit, values, setFieldValue, resetForm } =
      useFormik({
         initialValues: {
            expertFirstName: '',
            expertLastName: '',
            serviceId: '',
            expertPosition: '',
            expertImage: '',
            expertInformation: '',
         },
         onSubmit: (values) => {
            dispatch(postExpertRequest({ ...values }))
            resetForm()
         },
      })
   const changeExpertINformation = (value) => {
      setFieldValue('expertInformation', value)
   }
   useEffect(() => {
      dispatch(getExpertRequest())
   }, [])
   return (
      <AddExpertsStyled>
         <div className="title">
            <p>
               Специалисты <i className="right"></i>
            </p>
            <p className="addSpec">Добавление специалиста</p>
         </div>
         <span>Добавление специалиста</span>
         <ContainerForm onSubmit={handleSubmit}>
            <DoctorImg>
               <ChangePhotoProfile
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
                           placeholder="Напишите имя"
                           value={values.expertFirstName}
                           onChange={handleChange}
                        />
                     </div>
                     <br />
                     <div>
                        <label htmlFor="name">Отделение</label>
                        <SelectStyled
                           options={experts}
                           name="serviceId"
                           title="Выберите отделение"
                           label="Отделение"
                           onChange={handleChange}
                           value={values.serviceId}
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
                           placeholder="Напишите фамилию"
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
                           placeholder="Напишите должность"
                           value={values.expertPosition}
                           onChange={handleChange}
                        />
                     </div>
                  </div>
               </FirstForm>
               <TextEditorStyled
                  value={values.expertInformation}
                  onChange={changeExpertINformation}
                  className="textEditor"
                  type="text"
                  name="expertInformation"
               />
               <MyBtn>
                  <Button width="240px" height="40px" variant="outlined">
                     Отменить
                  </Button>
                  <MyButton type="submit" variant="contained">
                     Добавить
                  </MyButton>
               </MyBtn>
            </Form>
         </ContainerForm>
      </AddExpertsStyled>
   )
}
export default AddExperts
const AddExpertsStyled = styled('div')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   paddingTop: '30px',
   paddingLeft: '70px',
   paddingRight: '70px',
   background: '#E0E0E0',
   height: '100%',
   ' & .title': {
      display: 'flex',
      fontWeight: '400',
      fontSize: '14px',
      color: '#959595',
      lineHeight: '19px',
      paddingTop: '35px',
   },
   ' & .addSpec': {
      color: '#048741',
      paddingLeft: '3px',
   },
   ' & .right': {
      transform: 'rotate(-45deg)',
      '-webkit-transform': 'rotate(-45deg)',
   },
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
const ContainerForm = styled('form')(() => ({
   display: 'flex',
   gap: '100px',
   padding: '30px 70px 0px 40px',
   marginTop: '30px',
   background: '#FFFFFF',
}))
const FirstForm = styled('div')(() => ({
   display: 'flex',
}))
const SelectStyled = styled(Select)(() => ({
   width: '390px',
   height: '38px',
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
}))
const MyBtn = styled('div')(() => ({
   paddingTop: '70px',
   display: 'flex',
   justifyContent: 'flex-end',
   gap: '40px',
}))
const MyButton = styled(Button)(() => ({
   width: '240px',
   height: '40px',
}))
