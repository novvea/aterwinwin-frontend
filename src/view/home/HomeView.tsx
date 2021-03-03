import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import './HomeView.css'
import { ProductCards } from '../../components/productcards/ProductCards'
import { Search } from '../../components/search/Search'
import RoutingPath from '../../routes/RoutingPath'
import { UserContext } from '../../shared/provider/UserProvider'

export const HomeView = () => {
  const [authUserContext] = useContext(UserContext);

/*   const displayUsernameIfAuthenticated = () => {
    return authUserContext ? <h1>Välkommen till hemvyn {authUserContext.username}</h1> : <h1>Välkommen till hemvyn </h1>
  } */

  useEffect(() => {
 ; /* det första som sker när komponenten laddas in */
    return () => {
      /* det sista som sker när komponeneten avlägsnas*/
    };
  }, []); /* när det värdet vi sätter in i input uppdateras så körs hela useEffect om */

  return (
    <div className='homeViewWrapper'>
     {/*  {displayUsernameIfAuthenticated()} */}
      <div className='homeViewCategoriesWrapper'>
        <Link to={RoutingPath.categoriesView}>Kategorier</Link>
      </div>
      <div className='homeViewSearchWrapper'>
        <Search/>
      </div>
      <div className='homeViewProductCardsWrapper'>
        <ProductCards/> 
        <Link to={RoutingPath.myProfileView}>Hitta mina gillade produkter här...</Link>
      </div>
    </div>
  );
};
