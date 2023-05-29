import { Typography } from '@mui/material'
import React from 'react'

const Err404 = () => {
  return (<>
    <Typography fontSize={40} marginLeft={70} marginTop={30}>Sorry, this page isn't available.</Typography>
    <Typography fontSize={30} marginLeft={50} marginTop={2}>The link you followed may be broken, or the page may have been removed.</Typography>
    </>
  )
 }

export default Err404;