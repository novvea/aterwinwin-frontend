import styles from './ItemCards.module.css'
import { useState, useEffect, useContext } from 'react'
import TinderCard from 'react-tinder-card'
import BackendAPIService from '../../shared/api/service/BackendAPIService'
import { UserContext } from '../../shared/provider/UserProvider'

export const ItemCards = () => {
  const [items, setItems] = useState<any>([])
  const [authUserContext] = useContext(UserContext);

  const getAllItemsFromServer = async () => {
    const response = await BackendAPIService.getAllItems()
    setItems(response.data)
  }

  useEffect(() => {
    getAllItemsFromServer()
  }, [])


  const userLikedItem = async (item: any) => {
    try {
      console.log('Item has been liked')
      await BackendAPIService.userLikedItem({ id: item._id, email: authUserContext.email })
    } catch (error) {
      console.log('Error while trying to like item')
    }
  }


  return (
    <div className={styles.itemCardWrapper}>
      {items.map((item: any) => (
        <TinderCard
          key={item._id}
          onSwipe={() => console.log('onSwipe')}
          onCardLeftScreen={() => console.log('CardLeftScreen')}
        >
          <div className={styles.itemCard}>
            <img className={styles.itemImage} src={item.url} width={512} height={512} alt='A random produkt taken from the API' />
            <h2 className={styles.itemTitle}>{item.name}</h2>
            <div className={styles.itemSubtitle}>5km bort • {item.category}</div>
            <button>Nej</button>
            <button onClick={() => userLikedItem(item)}>Ja</button>
          </div>

        </TinderCard>
      ))}


      {/*       <h1>Produkt av typen blabla med id {indexContext}</h1>
      
      <div className='decisionButtonWrapper'>
        <button onClick={() => addCountOnButtonClick()}>Nej tack!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}>Mer än bara gillar, vill absolut ha!!!!</button>
        <button onClick={() => likeAndAddCountOnButtonClick()}> Gillar't </button>
      </div> */}
    </div>
  )
}
