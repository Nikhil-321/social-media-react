import { useQuery } from '@apollo/client'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { GET_USER_BY_ID } from '../graphql/Queries/User'

const MyProfile = () => {
    const {user} = useContext(AuthContext)
    const {data, error, loading} = useQuery(GET_USER_BY_ID, {variables: {userId: user.userId}})

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error}</h2>
    const {firstName, lastName, userName, email} = data.getUserById
  return (
    <>
     <div className='absolute flex w-screen h-screen '>
        <div className='w-[500px] h-[500px] bg-gray-100 mx-auto my-auto rounded-2xl overflow-hidden'>
            <div className='py-4'>
            <img height={"100px"} width = {"100px"} className='top-0 z-10 m-auto block' src={"https://www.shareicon.net/data/2016/05/24/770139_man_512x512.png"} alt=''></img>
            </div>
            <div className='flex-col mt-10'>
                <h2 className='text-center text-[18px] font-main font-bold mt-[12px]'>{firstName} {lastName } <span className='font-light text-[#6B7082] ml-2'>22</span></h2>
                <h2 className='text-center font-main text-[14px] mt-[12px]'>Ahmedabad</h2>
                <div className='border mt-[40px]'></div>
                <div className='flex flex-row'>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[12px] font-bold font-main text-center ml-[41px] mt-[12px]'>Firstname</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[41px]'>{firstName}</p>
                    </div>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[12px] font-bold font-main text-center ml-[41px] mt-[12px]'>Lastname</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[41px]'>{lastName}</p>
                    </div>
                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[12px] font-bold font-main text-center ml-[41px] mt-[12px]'>Email</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[41px]'>{email}</p>
                    </div>

                    <div className='flex-col'>
                        <p className='text-[#2E3349] text-[12px] font-bold font-main text-center ml-[41px] mt-[12px]'>Username</p>
                        <p className='text-[10px] text-[#6B7082] font-main ml-[41px]'>{userName}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyProfile