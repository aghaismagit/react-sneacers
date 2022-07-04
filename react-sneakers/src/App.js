import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentHeader">
        <h1>Все кроссовки</h1>
        <div className="search">
          <img className="search-img" width={15} height={15} src="/img/search-logo.svg" alt="Search" />
          <input className="searchInput" placeholder="Поиск..." />
        </div>
        </div>
        <div className="sneakers-wrapper">
          <Card />
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/second-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Air Max 270</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>11 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/third-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>10 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/fourth-sneakers.svg" alt="" />
            <h5>Кроссовки Puma X <br/> Aka Boku Future Rider</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="sneakers-wrapper">
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/third-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Under Armour Curry 8</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>6 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/sixth-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Kyrie 7</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>9 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/seventh-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Jordan Air Jordan 11</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>10 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/eigth-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike LeBron XVIII</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>16 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="sneakers-wrapper">
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/ninth-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Lebron XVIII Low</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>25 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/tenth-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>7 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/eleventh-sneakers.svg" alt="" />
            <h5>Кроссовки Puma X <br/> Aka Boku Future Rider</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>10 999 руб.</b>
              </div>
              <button className="cardButton">
                <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/twelveth-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Kyrie Flytrap IV</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>5 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
