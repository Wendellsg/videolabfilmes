import AppHeader from '../../Components/header/Header'
import AppFooter from '../../Components/footer/footer'
import Home from '../../Components/Home/Home'
function HomePage() {
  return (
    <div className="App-container">
      <AppHeader/>
      <Home/>
      <AppFooter/>
    </div>
  );
}

export default HomePage;