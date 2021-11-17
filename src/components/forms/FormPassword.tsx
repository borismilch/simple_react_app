import React from 'react'
import { FormControl, TextField } from '@mui/material'
import { useFormContext, Controller } from "react-hook-form";
import { InputProps } from '../../types/redux'

import './formStyle.css'

export const FormPassword: React.FC<InputProps> = ({label, name}) => {

  const styles =  {
    multilineColor:{
        color:'white'
    }
  };

  const { control, register } = useFormContext();

  return (
    <>
    <Controller
      name='name'
      control={control}
      render={({ field }) => <FormControl  style={{width: '100%'}}>
        <TextField 
          required={true} 
          className='inp' 
          color='warning' 
          label={name} variant='outlined' 
          style={{color: '#fff', margin: '14px 0px'}} 
          {...register(`${name}` as any, { required: true, maxLength: 20 })}  
          id="my-input" 
          aria-describedby="my-helper-text"
          InputProps={{
            className: 'white'
          }}
        />
      </FormControl>
      }
    />
    </>
  )
}
