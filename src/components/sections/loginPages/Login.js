import HeroImage from "../../../assets/food/freshbowl.jpg";


export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
        <section>
        <div className="auth">
          
          <form action="">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              placeholder="Username"
              required={true}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required={true}
            />
            <p>Forgot Password?</p>
            <button type="submit">Login</button>
          </form>
          <p className="login-message">Not a member? <span>Sign up</span></p>
        </div>
      </section>
      </div>
    </header>
  );
}
