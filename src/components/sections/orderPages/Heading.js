import HeroImage from "../../../assets/food/freshbowl.jpg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online, With QR Code</h1>
      </div>
      <section className="sig-qrcode">
                    <img src={require('../../../assets/Fresh N Go Sig-qrcode.png')} alt="little-lemon-restaurant"></img>
                </section>
                
    </header>
  );
}
