import React from 'react'
import { InputForm } from '../forms/InputForm'
import { FormPassword } from '../forms/FormPassword'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { RegisterAction } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

import SubmitButton from '../forms/SubmitButton';

import './pageStyles.css'
import { useForm, FormProvider } from 'react-hook-form';

export const RegisterPage: React.FC = () => {
  const methods = useForm()
  const dispatch = useDispatch()

  return (
    <>
    <div className='overlay' 
    style=
    {{
      background: `url(https://assets.biggreenegg.eu/app/uploads/2017/12/08102654/topimage-cote-de-boeuf-with-steak-rub-800x500.jpg)`,
      backgroundSize: 'cover'
    }} 
     />
    <div className="overlay">
      <Card sx={{ maxWidth: 600 }} style={{width: '100%'}}>
        <CardContent style={{background: '#181818'}}>
          <Typography color='rgb(255, 145, 0)' className='text-center' gutterBottom variant="h3" component="div">
            Registrate
          </Typography>

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => 
              dispatch(RegisterAction({ name: data.name, email: data.email, password: data.password }))
              )}>
              <InputForm name='name' label='Your name' />
              <InputForm name='email' label='Your E-mail' />
              <FormPassword name='password' label='Your password' />
              <FormPassword name='password2' label='Your password' />
              <SubmitButton loading={false} />
            </form>
          </FormProvider>
          
          
          <Typography variant='subtitle2' style={{color: '#ccc'}}>Вже зареєстрований? { <Link style={{color: '#ed6c02', textDecoration: 'none'}} to='/auth'>Ввійти!</Link> } </Typography>
        </CardContent>
      </Card>
 
    </div>

    </>
  )
}
