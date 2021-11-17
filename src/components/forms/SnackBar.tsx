import React from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useSelector, useStore, connect } from 'react-redux';
import { IMessage } from '../../types/redux'
import { messages } from '../../utils/messages';

const SnackBar: React.FC = () => {
  const store = useStore()
  const [open, setOpen] = React.useState(false);
  const snackBar = useSelector((state: any) => state.snackBar.snackBar)

  console.log(snackBar)
 const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    snackBar &&
    <Snackbar open={snackBar} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={messages[snackBar].type} sx={{ width: '100%' }}>
      {messages[snackBar].message}
    </Alert>
   </Snackbar>
  )
}


export default connect(null, null)(SnackBar)