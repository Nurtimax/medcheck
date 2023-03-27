import { Box, Grid, styled } from '@mui/material'
import searchIcon from '../../assets/icons/search-icon.svg'
// import Table from '../../components/time-table/table'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'
import ScheduleTable from './../../components/table/Schudule.Table'
import useDateAndWeek from '../../hook/useDateAndWeek'
import { DUMMY_DATA } from '../../utils/constants/schedule'

const TimeTable = () => {
   const { columns: newColumns, data } = useDateAndWeek(DUMMY_DATA)

   return (
      <StyledTimeTable>
         <Box>
            <StyledInput
               placeholder="Поиск"
               endAdornment={<img src={searchIcon} />}
            />
         </Box>
         <BoxStyle className="time-table">
            <Grid container>
               <Grid item className="buttons" xs={12}>
                  <Grid container spacing={1.2}>
                     <Grid item>
                        <StyledButton>Изменить день </StyledButton>
                     </Grid>
                     <Grid item xs={6}>
                        <StyledButton>Установить по шаблону </StyledButton>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item xs={12}>
                  <ScheduleTable columns={newColumns} data={data} />
               </Grid>
            </Grid>
         </BoxStyle>
      </StyledTimeTable>
   )
}

export default TimeTable

const StyledTimeTable = styled(Box)(() => ({
   paddingLeft: '80px',
   paddingRight: '80px',
   display: 'grid',
   gap: '20px',
   '& .time-table': {
      width: '100%',
      boxShadow:
         'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      overflow: 'auto',
   },
   '& .buttons': {
      padding: '20px 18px',
   },
}))

const StyledInput = styled(Input)(() => ({
   height: '40px',
   width: '36vw',
   border: 'none',
   background: 'white',
   boxShadow:
      'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
   borderRadius: '24px',
   '&:hover': {
      borderRadius: '24px',
      border: 'none',
   },
   '& .MuiInputBase-input': {
      width: '95%',
   },
}))

const StyledButton = styled(Button)(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   padding: '8px 20px 9px',
   gap: '49px',

   background: '#E0E2E7',
   borderRadius: '4px',
   fontSize: '14px',

   color: '#4D4E51',
}))
const BoxStyle = styled(Box)(() => ({
   background: 'white',
   maxWidth: '100%',
   margin: '0 auto',
}))
