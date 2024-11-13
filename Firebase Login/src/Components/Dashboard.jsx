import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

export default function Dashborad() {


  const [user, setUser] = useState(null)
  const [username, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")



  useEffect(() => {
    let sub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        console.log(currentUser)
      }
    })
  }, [])

  useEffect(() => {
    if (user) {
      fetchUser()
    }
  }, [user])


  const fetchUser = () => {
    console.log(user)
    getDoc(doc(db, "users", user.uid))
      .then(data => {
        console.log(data.data())
        const fetchName = data.data().name
        const fetchAge = data.data().Age


        setUserName(fetchName)
        setUserAge(fetchAge)

      })
  }

  return (
    <div className='signup-container'>
      <h1>Hello {username}</h1>
      <h1>{userAge}</h1>
    </div>
  )
}