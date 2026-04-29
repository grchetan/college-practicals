import logo from "./assets/chetan.png";
import "./Image.css";

function Image() {
  return (
    <>
      <section className="header-section">
        <div className="header-container">
          <h1>Hello My name is Chetan Prajapat</h1>
          <h1>Building your dream pixel by pixel!</h1>
          <a href=""></a>
        </div>
      </section>

      <div>
        <div>
          <img src={logo} alt="myimage" />
          <h1>Image is run</h1>
        </div>
        <div>
          <h1>
            Hello! I'm Chetan, a passionate web developer and enthusiastic
            gamer. I specialize in creating visually appealing, user-friendly
            websites that provide great user experiences. Currently, I'm
            pursuing a BCA degree and expanding my skills in web development,
            including HTML, CSS, JavaScript, and responsive design.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Image;
