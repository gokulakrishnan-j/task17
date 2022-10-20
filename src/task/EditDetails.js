import React, { useEffect } from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import{useParams,useNavigate} from 'react-router-dom'

function EditDetails(props) {
    var [name,setname]=useState()
    var [age,setage]=useState()
    var [dob,setdob]=useState()
    var [standard,setStandard]=useState()
  
    var params=useParams()
    var navigate=useNavigate()
  useEffect(()=>{
    setname(props.data.userdata[params.id].name)
    setage(props.data.userdata[params.id].age)
    setdob(props.data.userdata[params.id].dob)
    setStandard(props.data.userdata[params.id].standard)
  },[])
    var handlesubmit=()=>{
      var newdata={name,age,dob,standard}
      var editusers=[...props.data.userdata]
      editusers.splice(params.id,1,newdata)
      console.log(newdata)
      newdata.name=== "" || newdata.age=== "" || newdata.dob=== "" || newdata.standard=== "" ?alert("FILL THE VALUE") ||
      navigate(`/edit-user/${params.id}`):  props.data.setuserData(editusers) || navigate('/databoard')
    }
    return (
      <div>
          
          <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <TextField id="outlined-basic" value={name}  sx={{width:"50vw"}} onChange={(event)=>setname(event.target.value)} label="Name" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value={age}  sx={{width:"50vw"}} onChange={(event)=>setage(event.target.value)} label="Age" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value={dob}  sx={{width:"50vw"}} onChange={(event)=>setdob(event.target.value)} label="Date Of Birth" variant="outlined" />
        </div>
        <div>
        <TextField id="outlined-basic" value={standard}  sx={{width:"50vw"}} onChange={(event)=>setStandard(event.target.value)} label="Standard" variant="outlined" />
        </div>
        <Button  variant="contained" onClick={()=>handlesubmit()} >SAVE</Button>
      </Box>
      <Button variant="outlined"  sx={{color:"black", margin:"16px"}} onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>
  Back
</Button>
     </div>
    )
}

export default EditDetails