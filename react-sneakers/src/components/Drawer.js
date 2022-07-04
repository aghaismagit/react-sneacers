function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <div className="drawer-top">
            <h2>
              Корзина
              <img className="cartItem-remove" src="/img/remove.svg" alt="remove" />
            </h2>
            <div className="cartItems">
              <div className="cartItem">
                <img className="cartItem-image" width={70} height={70} src="/img/second-sneakers.svg" alt="sneakers" />
                <div className="cartItem-text">
                  <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItem-remove" src="/img/remove.svg" alt="remove" />
              </div>
              <div className="cartItem">
                <img className="cartItem-image" width={70} height={70} src="/img/second-sneakers.svg" alt="sneakers" />
                <div className="cartItem-text">
                  <p>Мужские Кроссовки <br/> Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItem-remove" src="/img/remove.svg" alt="remove" />
              </div>
            </div>
          </div>
          <div className="order">
            <div className="result">
              <p>Итого:</p>
              <div className="dash"></div>
              <p><b>21 498 руб.</b></p>
            </div>
            <div className="tax">
              <p>Налог 5%:</p>
              <div className="dash"></div>
              <p><b>1074 руб.</b></p>
            </div>
            <button className="orderBtn">
              <p>Оформить заказ</p>
              <img className="orderArrow" src="/img/order-arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Drawer;