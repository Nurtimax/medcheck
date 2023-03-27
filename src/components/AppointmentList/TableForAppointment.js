import {
   Container,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchClearAll, fetchUsers } from '../../redux/slices/appointment-slice'
import { tableData } from '../../utils/constants/data'
import CustomLink from '../UI/Custom.Link'

const TableForAppointment = () => {
   const colors = {
      ['подвержден']: '#346EFB',
      ['завершeн']: '#07AB53',
      ['отмeнeн']: '#F91515',
   }

   const { applications } = useSelector((state) => state.appointment)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchUsers())
   }, [])
   const deleteHandlerClear = () => {
      dispatch(fetchClearAll())
   }

   return (
      <Container>
         <TableContainerStyle>
            <Table>
               <TableHead>
                  <TableRow>
                     {tableData.map((title) => (
                        <TableCellTitle key={title.id}>
                           {title?.userInfo?.head}
                        </TableCellTitle>
                     ))}
                  </TableRow>
               </TableHead>

               <TableBody>
                  {applications?.map((data, index) => (
                     <TableRow key={data.id}>
                        <TableCell>
                           <div>
                              <div className="name">
                                 <div>
                                    <img
                                       src={data.expert.expertImage}
                                       alt="expertImage"
                                       style={{
                                          width: '60px',
                                          borderRadius: '50%',
                                          position: 'relative',
                                          top: '20px',
                                          marginRight: '20px',
                                       }}
                                    />

                                    <CustomLinkStyled to={`/user/${index + 1}`}>
                                       <span className="expertName">
                                          {data.expert.expertLastName}
                                       </span>
                                       <span className="expertName">
                                          {data.expert.expertFirstName}
                                       </span>
                                    </CustomLinkStyled>
                                    <p style={{ marginTop: '20px' }}>
                                       {data.expert.expertPosition}
                                    </p>
                                 </div>
                              </div>
                              <div className="speciality">{}</div>
                           </div>
                        </TableCell>
                        <TableCell>
                           <div>{data?.recordedDate}</div>
                           <div>{data?.recordedTime}</div>
                        </TableCell>
                        <TableCell>
                           <div>
                              <StatusText
                                 color={colors[data?.onlineEntryStatus]}
                              >
                                 {data.onlineEntryStatus}
                              </StatusText>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
            <p onClick={deleteHandlerClear}>
               <span>&times;</span> Очистить список заказов
            </p>
         </TableContainerStyle>
      </Container>
   )
}
export default TableForAppointment
const TableContainerStyle = styled(TableContainer)(() => ({
   display: 'flex',
   '& .name': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',

      '& .expertName': {
         color: '#222222',
      },
   },
   '& .speciality': {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#959595',
   },

   '& p': {
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      color: '#222222',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '140%',
   },
   '& span': {
      color: 'red',
      fontSize: '25px',
   },
}))
const TableCellTitle = styled(TableCell)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   whiteSpace: 'nowrap',
   color: '#222222',
}))

const StatusText = styled('div')`
   color: ${(props) => props.color};
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 22px;
`

const CustomLinkStyled = styled(CustomLink)(() => ({}))
