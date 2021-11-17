import React from 'react'
import {LoadingButton} from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, connect } from 'react-redux';


const SubmitButton:  React.FC<{loading: boolean}> = () => {
  const loading = useSelector((state: any) => state.loading.loading) || false
  return (
    <LoadingButton
      color='warning'
      fullWidth
      disabled={loading}
      style={{margin: '6px 0px'}}
      type='submit'
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
    >
      Send
    </LoadingButton>
  )
}

export default connect(null, null)(SubmitButton)

