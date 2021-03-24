import styles from './AddItemButton.module.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'

export const AddItemButton = () => {
  const history = useHistory();
  const [authUserContext] = useContext(UserContext)

  const moveToAddItemViewOrLogIn = () => {
    authUserContext
      ?
      history.push(RoutingPath.addItemView)
      :
      history.push(RoutingPath.logInView)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => moveToAddItemViewOrLogIn()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 4V1H5V4H8V6H5V9H3V6H0V4H3ZM6 10V7H9V4H16L17.83 6H21C22.1 6 23 6.9 23 8V20C23 21.1 22.1 22 21 22H5C3.9 22 3 21.1 3 20V10H6ZM13 19C15.76 19 18 16.76 18 14C18 11.24 15.76 9 13 9C10.24 9 8 11.24 8 14C8 16.76 10.24 19 13 19ZM9.8 14C9.8 15.77 11.23 17.2 13 17.2C14.77 17.2 16.2 15.77 16.2 14C16.2 12.23 14.77 10.8 13 10.8C11.23 10.8 9.8 12.23 9.8 14Z" fill="#49984C" />
        </svg>
        Lägg till objekt</button>
    </div>
  )
}
