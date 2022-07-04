function Card() {
    return(
        <div className="card">
            <div className="favorite">
              <img width={32} height={32} src="/img/unliked-card.svg" alt="unliked" />
            </div>
            <img className="cardImg" width={133} height={112} src="/img/eleventh-sneakers.svg" alt="" />
            <h5>Мужские Кроссовки <br /> Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="cardCost">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardButton">
               <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
    );
}

export default Card;