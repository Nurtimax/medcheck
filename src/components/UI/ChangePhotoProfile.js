import { styled, Avatar } from '@mui/material'
import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ReactComponent as IconChange } from '../../assets/icons/addExpertIcon.svg'
import DropzoneWithFileReader from './../UI/DropZone'

export default function ChangePhotoProfile({ foto, setFoto, url }) {
   const [anchorEl, setAnchorEl] = React.useState(false)

   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(false)
   }
   const handlePhotoProfile = (e) => {
      console.log(e)
      return e
   }
   const removePhoteProfile = () => {
      setFoto(null)
      handleClose()
   }
   return (
      <div>
         <Change src={foto} onClick={handleClick}>
            <ImgExpert src={url} />
            <IconChangeStyled />
         </Change>

         <MenuStyled
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         >
            <MenuItemStyled onClick={handleClose}>
               <DropzoneWithFileReader
                  setFile={setFoto}
                  handlePhotoProfile={handlePhotoProfile}
               >
                  Изменить фото профиля
               </DropzoneWithFileReader>{' '}
            </MenuItemStyled>
            <MenuItemStyled onClick={removePhoteProfile}>
               Удалить
            </MenuItemStyled>
         </MenuStyled>
      </div>
   )
}
const Change = styled(Avatar)(() => ({
   backgroundColor: '#F0F0F0',
   boxSizing: 'border-box',
   padding: 9,
   width: '140px',
   height: '140px',
   cursor: 'pointer',
}))

const MenuStyled = styled(Menu)(() => ({
   width: '200px',
}))

const ImgExpert = styled('img')(() => ({
   position: 'absolute',
   zIndex: '0',
}))

const IconChangeStyled = styled(IconChange)(() => ({
   zIndex: '3',
   background: '#F0F0F0 ',
}))

const MenuItemStyled = styled(MenuItem)(() => ({
   fontSize: '12px',
   fontFamily: 'Manrope',
   fontWeight: '500',
   height: '25px',
}))
