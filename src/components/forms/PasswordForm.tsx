import React, { useState } from 'react'
import {  FormControl, TextField, InputAdornment, IconButton } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import { InputProps } from '../../types/redux'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import './formStyle.css'

export const PasswordForm: React.FC<InputProps> = ({label, name}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false) 
  const styles =  {
    multilineColor:{
        color:'white'
    }
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      [name]: ''
    }
  });

  return (
    <>
    <Controller
      name='name'
      control={control}
      render={({ field }) => <FormControl  style={{width: '100%'}}>
        <TextField 
          type={showPassword? 'text': 'password'}
          required={true} 
          className='inp' 
          color='warning' 
          label={name} variant='outlined' 
          style={{color: '#fff', margin: '14px 0px'}} 
          {...field}  id="my-input" 
          aria-describedby="my-helper-text"
          InputProps={{
            className: 'white',
            endAdornment:(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
      }
    />
    </>
  )
}
