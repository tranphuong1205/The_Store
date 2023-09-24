import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" class="header">
      <div class="logo">
        <img src="/shop_icon.png" class="shop_icon" />
      </div>
      <div id="link" class="link">
        <a href="" class="item">
          Dress
        </a>
        <a href="" class="item">
          Shirts
        </a>
        <a href="" class="item">
          Coats
        </a>
        <a href="" class="item">
          Jeans
        </a>
      </div>
      <div id="search_box" class="search_box">
        <button type="submit" class="icon">
          <i class="fa fa-search"></i>
        </button>
        <input class="search"></input>
      </div>
      <button
        id="cart"
        class="cart"
        style={{ border: "none", backgroundColor: "white" }}
      >
        <i class="fa-cart-shopping cart-icon"></i>
      </button>
      <div id="cart_body" style={{ paddingTop: 50, display: "none" }}>
        <div
          class="cart_title"
          style={{ textTransform: "uppercase", fontWeight: "bolder" }}
        >
          Shopping cart
          <button
            type="button"
            id="close"
            style={{ height: 15, width: 15, marginLeft: 80 }}
          >
            x
          </button>
        </div>
        <div
          class="product"
          style={{ width: "100%", height: 85, display: "flex", paddingTop: 20 }}
        >
          <div class="img" style={{ width: 100, height: "100%" }}></div>
          <div class="info">
            <div class="name">tên sản phẩm</div>
            <div class="qty">số lượng</div>
          </div>
          <button
            type="submit"
            class="delete"
            style={{
              height: 30,
              width: 80,
              backgroundColor: "white",
              border: "none",
              paddingTop: 40,
            }}
          >
            Delete
          </button>
        </div>
        <div class="pay">
          <button
            type="submit"
            class="payment"
            style={{
              width: "60%",
              height: 50,
              backgroundColor: "orangered",
              borderRadius: 5,
              textTransform: "uppercase",
            }}
          >
            Solve
          </button>
        </div>
      </div>
      <div
        id="user"
        class="user"
        style={{ color: "black", textDecoration: "none" }}
      >
        <Link href="sign-in" to="sign-in">
          <i class="fa-user user-icon"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
