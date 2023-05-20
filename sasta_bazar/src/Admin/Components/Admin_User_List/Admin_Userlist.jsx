import "./Admin_Userlist.css"
import React, { useEffect } from 'react'
import { store } from "../../../Redux/store";
import { useSelector, useDispatch } from "react-redux"
import { GET_USERS } from '../../../Redux/AdminRedux/action'
import Admin_Navbar from "../Admin_Navbar/Admin_Navbar"
import Admin_UserCard from "./Admin_UserCard"
import Footer from "../../../Components/Footer";
import { Flex } from "@chakra-ui/react";
export const Admin_Userlist = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GET_USERS)
  }, [])
  const users = useSelector((store) => store.AdminReducer.users)
  return (
    <>
      <div>
        <Admin_Navbar />
      </div>
      <div className="card">
        <Flex wrap="wrap" gap={20} >
          {users.length > 0 && users.map((el) =>
            <Admin_UserCard key={el.id} {...el} />
          )
          }
        </Flex>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
