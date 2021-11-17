import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

const RouteGuard: React.FC = ({children}) => {
  const user = useSelector((state: any) => state.loading.user)

  if(!user) { return <Redirect to='/auth' /> }

  return (
    <>
    {children}
    </>
  )
}

export default connect(null, null)(RouteGuard)
