import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.user !== null
  );
  const navigate = useNavigate()
    

  useEffect(() => {

    if(!isAuthenticated){
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard