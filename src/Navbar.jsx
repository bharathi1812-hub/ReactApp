import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2 className="logo">MyShop</h2>

      <input
        type="text"
        className="search"
        placeholder="Search products"
      />

      <div className="menu">
        <span>Login</span>

        <span className="cart">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
