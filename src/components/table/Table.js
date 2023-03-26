import {
   styled,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import MuiTable from '@mui/material/Table'
import React from 'react'
import TableItem from './Table.List'
import { tableTitle } from '../../utils/constants/data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
   editExpertRequest,
   getAllExpert,
   removeExpertRequest,
} from '../../redux/slices/expertSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoadingSpinner from '../UI/LodaingSpinner'
import iconSearching from '../../assets/icons/searching.svg'

const Table = () => {
   const [items, setItems] = useState([])

   const { allExpert, isLoading } = useSelector((state) => state.addExpert)

   const [sortData, setSortData] = useState(allExpert)

   useEffect(() => {
      setSortData(allExpert)
   }, [allExpert])

   function handleChange(event) {
      const filterData = allExpert.filter((item) =>
         item.expertFirstName.toLowerCase().includes(event.toLowerCase())
      )
      setSortData(filterData)
   }

   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getAllExpert())
   }, [])

   const editClickHandler = (id) => {
      dispatch(editExpertRequest(id))
      navigate('/admin/speciality/edit_expert')
   }
   const removeClickHandler = (id) => {
      dispatch(removeExpertRequest(id))
         .unwrap()
         .then(() => setItems(items.filter((item) => item.id !== id)))
   }

   return (
      <>
         <SearchStyled>
            <InputSearching
               type="text"
               onChange={(e) => handleChange(e.target.value)}
               placeholder="Поиск"
            />
            <Searching src={iconSearching} alt="searching" />
         </SearchStyled>
         <TableContainerStyled>
            {isLoading && <LoadingSpinner />}

            <MuiTableStyle>
               <TableHead>
                  <TableRow>
                     {tableTitle.map((title) => (
                        <TableCellTitle key={title.id}>{title}</TableCellTitle>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {sortData.map((row, index) => (
                     <TableItem
                        index={index}
                        key={row.id}
                        row={row}
                        editClick={editClickHandler}
                        removeClick={removeClickHandler}
                     />
                  ))}
               </TableBody>
            </MuiTableStyle>
         </TableContainerStyled>
      </>
   )
}

export default Table

const MuiTableStyle = styled(MuiTable)(() => ({
   borderRadius: '6px',
   cursor: 'pointer',
}))

const TableCellTitle = styled(TableCell)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   whiteSpace: 'nowrap',
}))

const TableContainerStyled = styled(TableContainer)(() => ({
   width: '1200px',
   margin: '0 auto',
   background: '#FFFFFF',
}))

const SearchStyled = styled('div')(() => ({
   width: '600px',
   height: '40px',
   backgroundColor: '#FFFFFF',
   padding: '3px 0',
   borderRadius: '24px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: '20px',
}))

const InputSearching = styled('input')(() => ({
   width: '550px',
   border: 'none',
   outline: 'none',
   backgroundColor: 'inherit',
}))
const Searching = styled('img')(() => ({
   width: '17px',
   height: '17px',
   cursor: 'pointer',
}))
