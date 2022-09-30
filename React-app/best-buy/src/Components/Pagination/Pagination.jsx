import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Pagination = ({current,total,Onchange,setPage,page}) => {
    const prev=<button onClick={()=>setPage(page-1)}> <ArrowBackIosIcon/> </button>
    const next=<button onClick={()=>setPage(page+1)}> <ArrowForwardIosIcon/></button>
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    {prev}
    <button style={{height:"30px",width:"30px"}}>{current}</button>
    {next}
    </div>
  )
}

export default Pagination