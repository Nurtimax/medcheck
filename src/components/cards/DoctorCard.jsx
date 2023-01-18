import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '../../components/UI/Button'

export default function DoctorCard({ name, title, img, onClick, ...props }) {
   return (
      <>
         <CardStyle {...props}>
            <CardMediaContainer>
               <CardMediaStyle component="img" alt="doctor16" image={img} />
            </CardMediaContainer>
            <CardContentStyle>
               <DoctorName>{name}</DoctorName>
               <DoctorSpeciality>{title}</DoctorSpeciality>
            </CardContentStyle>
            <ButtonStyle onClick={onClick}>Записаться на прием</ButtonStyle>
         </CardStyle>
      </>
   )
}

const CardStyle = styled(Card)(() => ({
   width: '319px',
   boxSizing: 'border-box',
}))
const CardMediaStyle = styled(CardMedia)(() => ({
   width: '100%',
   height: '370px',
   background:
      'radial-gradient(43.84% 43.84% at 50.16% 55.3%, #FDFDFD 0%, #E4E7EE 100%)',
   boxSizing: 'content-box',
}))
const CardContentStyle = styled('div')(() => ({
   padding: '16px 0px 0 0',
   boxSizing: 'border-box',
}))
const CardMediaContainer = styled('div')(() => ({
   background:
      'radial-gradient(43.84% 43.84% at 50.16% 55.3%, #FDFDFD 0%, #E4E7EE 100%)',
   borderRadius: '4px',
}))
const DoctorName = styled(Typography)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#222222',
}))
const DoctorSpeciality = styled(Typography)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '22px',
   color: '#959595',
}))

const ButtonStyle = styled(Button)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '16px',
   lineHeight: '22px',
   textAlign: 'center',
   color: '#029847',
   alignItems: 'center',
   border: '1px solid #048741',
   borderRadius: '10px',
   whiteSpace: 'nowrap',
   textTransform: 'none',
   margin: '22px 0 0 0 ',
}))
