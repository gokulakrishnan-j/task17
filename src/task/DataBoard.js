import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';



function DataBoard(props) {

  
  
 
var navigate=useNavigate()
  var handledelete=(i)=>{
    var deleteuser=[...props.data.userdata]
    deleteuser.splice(i,1)
   if (window.confirm("ARE YOU SURE TO DELETE THIS DATA PERMANENTALY")==true){ 
      props.data.setuserData(deleteuser)
    }
     else{

     } 
   
   
  }
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>S.No</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell align="center">AGE</TableCell>
            <TableCell align="center">DATE OF BIRTH</TableCell>
            <TableCell align="center">STANDARD</TableCell>
            <TableCell align="center"></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.userdata.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border:"0px",borderRadius:"0px" } }}
            >
                <TableCell component="th" scope="row">
                {i+1}.
              </TableCell>
                <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.standard}</TableCell>
              <TableCell align="center">
              <Stack direction="row" spacing={2}>
      <Button onClick={()=>handledelete(i)} startIcon={<DeleteIcon
       color='error' 
       />}/>
      
      <Button onClick={()=>{
        navigate(`/edit-user/${i}`)}
      } endIcon={<EditIcon 
      color='primary'
      />}/>
              
    </Stack>
    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    
    </div>
  )
}

export default DataBoard