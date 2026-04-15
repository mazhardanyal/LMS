import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { server } from '../config'
import { setUserData } from '../redux/userSlice'

const useCurrentUser = () => {
    console.log("HOOK RUNNING")
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(
          server + "/api/user/getcurrentuser",
          { withCredentials: true }
        )

        dispatch(setUserData(result.data || result.data.user))
      } catch (error) {
        console.log("Get current user error", error)
        dispatch(setUserData(null))
      }
    }

    fetchUser()
  }, [dispatch])
}

export default useCurrentUser