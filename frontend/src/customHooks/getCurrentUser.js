import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { server } from '../config'
import { setUserData } from '../redux/userSlice'

const useCurrentUser = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          server + "/api/user/getcurrentuser",
          { withCredentials: true }
        )

        dispatch(setUserData(result.data))
      } catch (error) {
        console.log("Get current user error", error)
        dispatch(setUserData(null))
      }
    }

    fetchUser()
  }, [dispatch])
}

export default useCurrentUser