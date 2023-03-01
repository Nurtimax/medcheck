import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ProfileCrud from './ProfileCrud'
import ChangePassword from './ChangePassword'
import { styled } from '@mui/material'
import { PersonalArea } from '../../utils/constants/data'

function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
}

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

function ProfileCrudContainer() {
   const [value, setValue] = React.useState(0)

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Container>
         <Typography className="data">
            <Typography className="personalArea">{PersonalArea}</Typography>
            <span>Профиль</span>
         </Typography>
         <h2>Профиль</h2>
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            classes={{ indicator: 'indicator' }}
         >
            <Tab
               classes={{ selected: 'selected' }}
               label="личные данные"
               {...a11yProps(0)}
            />
            <Tab
               classes={{ selected: 'selected' }}
               label="Сменить пароль"
               {...a11yProps(1)}
            />
         </Tabs>

         <TabPanel value={value} index={0}>
            <ProfileCrud />
         </TabPanel>
         <TabPanel value={value} index={1}>
            <ChangePassword />
         </TabPanel>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',

   '& .selected': {
      color: '#048741',
   },

   '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': {
      color: '#048741',
   },
   '& .indicator': {
      background: '#048741',
   },

   '& .data': {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#048741',
      fontSize: '14px',
   },

   '& .personalArea': {
      color: '#959595',
   },
}))

export default ProfileCrudContainer
