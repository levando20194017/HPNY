import "./App.css";
import Bgr from "./assets/images/bgr.jpg";
import CircularPattern from "./assets/images/circular-pattern.png";
import Pattern from "./assets/images/pattern.png";
import Flower from "./assets/images/flower.png";
import Flower1 from "./assets/images/flower1.png";
import Flower2 from "./assets/images/flower2.png";
import Lanterns from "./assets/images/lanterns.png";
import CloudRed1 from "./assets/images/cloud-red1.png";
import CloudRed2 from "./assets/images/cloud-red2.png";
import LionDance from "./assets/images/Lion-dance.gif";
import LionDance2 from "./assets/images/Lion-dance2.gif";
import Cat from "./assets/images/cat.png";
import Dragon from "./assets/images/dragon.png";
import Rim1 from "./assets/images/rim1.png";
import TextureClouds from "./assets/images/texture-clouds.png";
import BigClouds1 from "./assets/images/big-clouds1.png";
import BigClouds2 from "./assets/images/big-clouds2.png";
import BigClouds3 from "./assets/images/big-clouds3.png";
import Xuan from "./assets/images/xuan.jpg";
import Bg1 from "./assets/images/bg1.jpg";
import BigFlower from "./assets/images/big-flower.png";
import BigFlower1 from "./assets/images/big-flower1.png";
import BigFlower2 from "./assets/images/big-flower2.png";
import ApricotBlossom from "./assets/images/apricot-blossom.png";
import MySong from "./assets/images/nhac.mp3";
import { useState } from "react";

function App() {
  const [slider3Active, setSlider3Active] = useState(false);
  const handleClick = () => {
    const boxFlower = document.querySelector(".flower-img:nth-child(1)");
    const boxFlower2 = document.querySelector(".flower-img:nth-child(2)");
    const boxFlower3 = document.querySelector(".flower-img:nth-child(3)");
    const boxFlower4 = document.querySelector(".flower-img:nth-child(4)");
    const boxFlower5 = document.querySelector(".flower-img:nth-child(5)");
    const boxFlower6 = document.querySelector(".flower-img:nth-child(6)");
    const circleActive = document.querySelector(".circle");
    const boxsliderimg1 = document.querySelector(".box-slider_img1");
    const catActive = document.querySelector(".cat");
    const numberActive = document.querySelector(".box-number");
    const buttonDisplay = document.querySelector(".box-button");
    const rhombus1 = document.querySelector(".rhombus:nth-child(1)");
    const rhombus2 = document.querySelector(".rhombus:nth-child(2)");
    const rhombusImg = document.querySelector(".rhombus-img");
    const mailActive = document.querySelector(".mail");

    boxFlower.classList.toggle("active");
    boxFlower2.classList.toggle("active");
    boxFlower3.classList.toggle("active");
    boxFlower4.classList.toggle("active");
    boxFlower5.classList.toggle("active");
    boxFlower6.classList.toggle("active");
    circleActive.classList.toggle("active");
    boxsliderimg1.classList.toggle("active");
    catActive.classList.toggle("active");
    numberActive.classList.toggle("active");
    buttonDisplay.classList.toggle("active");
    rhombus1.classList.toggle("active");
    rhombus2.classList.toggle("active");
    rhombusImg.classList.toggle("active");
    mailActive.classList.toggle("active");

    const mySong = document.getElementById("song");
    if (mySong.paused) {
      mySong.play();
    }
  };
  const handleClickMail = () => {
    // const slider3 = document.querySelector(".slider3");
    // slider3.classList.add("active");
    setSlider3Active(true)
  };
  const handleClickIcon = () => {
    // const slider3 = document.querySelector(".slider3");
    // slider3.classList.remove("active");
    setSlider3Active(false)
  };
  return (
    <div>
      <div className="box-slider">
        <div className="slider1">
          <img src={Bgr} alt="" />
          <div className="happynewyear">
            <div className="textHappynewyear">
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
              <div className="box-span">
                <span></span>
              </div>
            </div>
          </div>
          <div className="box-button">
            <div className="button">
              <button onClick={handleClick}>Ấn vào đây nè!</button>
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
            </div>
          </div>
          <div className="box-slider_img1">
            <div className="slider-img1">
              <img src={CircularPattern} alt="" />
            </div>
            <div className="pattern">
              <img src={Pattern} alt="" />
            </div>
          </div>
          <div className="circle">
            <span></span>
          </div>
          <div className="box-flower">
            <div className="flower-img">
              <img src={Flower} alt="" />
            </div>
            <div className="flower-img">
              <img src={Flower} alt="" />
            </div>
            <div className="flower-img">
              <img src={Flower1} alt="" />
            </div>
            <div className="flower-img">
              <img src={Flower1} alt="" />
            </div>
            <div className="flower-img">
              <img src={Flower2} alt="" />
            </div>
            <div className="flower-img">
              <img src={Flower2} alt="" />
            </div>
          </div>
          <div className="box-slider_img2">
            <div className="box-slider-img2">
              <div className="slider-img2">
                <img src={Lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img3">
              <div className="slider-img3">
                <img src={Lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img4">
              <div className="slider-img4">
                <img src={Lanterns} alt="" />
              </div>
            </div>
            <div className="box-slider-img5">
              <div className="slider-img5">
                <img src={Lanterns} alt="" />
              </div>
            </div>
          </div>
          <div className="slider-img6">
            <img src={CloudRed1} alt="" />
            <img src={CloudRed2} alt="" />
            <img src={CloudRed2} alt="" />
          </div>
          <div className="box-lion_dance">
            <div className="lion_dance1">
              <img src={LionDance} alt="" />
            </div>
            <div className="lion_dance2">
              <img src={LionDance2} alt="" />
            </div>
          </div>
          <div className="cat" style={{ marginTop: "2%" }}>
            <img src={Dragon} alt="" />
          </div>
          <div className="box-number">
            <div className="number2024">
              <div className="number">
                <span>2</span>
              </div>
              <div className="number">
                <span>0</span>
              </div>
              <div className="number">
                <span>2</span>
              </div>
              <div className="number">
                <span>4</span>
              </div>
            </div>
          </div>
          <div className="box-rim">
            <div className="rim1">
              <img src={Rim1} alt="" />
            </div>
            <div className="rim2">
              <img src={Rim1} alt="" />
            </div>
          </div>
          <div className="box-texture_clouds">
            <div className="texture_clouds1">
              <img src={TextureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={TextureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={TextureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={TextureClouds} alt="" />
            </div>
            <div className="texture_clouds1">
              <img src={TextureClouds} alt="" />
            </div>
          </div>
          <div className="box-big_clouds">
            <div className="big_clouds1">
              <img src={BigClouds1} alt="" />
            </div>
            <div className="big_clouds2">
              <img src={BigClouds2} alt="" />
            </div>
            <div className="big_clouds3">
              <img src={BigClouds3} alt="" />
            </div>
          </div>
        </div>
        <div className="slider2">
          <div className="rhombus"></div>
          <div className="rhombus"></div>
          <div className="rhombus-img">
            <img src={Xuan} alt="" />
          </div>
          <div className="mail" onClick={handleClickMail}>
            <button>
              <i className="fa-regular fa-envelope"></i>
            </button>
            <span className="heart">
              <i className="fa-solid fa-heart"></i>
            </span>
          </div>
        </div>
        <div className={`slider3 ${slider3Active ? "active" : ""}`}>
          <div className="box-content">
            <div className="left">
              <img src={Bg1} alt="" />
              <div className="center"></div>
              <div className="lanterns-content">
                <img src={Lanterns} alt="" />
              </div>
            </div>
            <div className="box-big_flowers">
              <img src={BigFlower} alt="" />
              <img src={BigFlower} alt="" />
              <img src={BigFlower} alt="" />
              <img src={BigFlower1} alt="" />
              <img src={BigFlower1} alt="" />
              <img src={BigFlower2} alt="" />
              <img src={BigFlower2} alt="" />
              <img src={BigFlower2} alt="" />
            </div>
            <div className="box-circle_left">
              <div className="circle_left">
                <img src={CircularPattern} alt="" />
                <div className="text-content">
                  <h2>Happy New</h2>
                  <h1>Year</h1>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="apricot_blossom">
              <img src={ApricotBlossom} alt="" />
              <img src={ApricotBlossom} alt="" />
              <img src={ApricotBlossom} alt="" />
              <img src={ApricotBlossom} alt="" />
              <img src={ApricotBlossom} alt="" />
              <img src={ApricotBlossom} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="content">
              <div className="title">
                <h1>&#129505;Gửi em!</h1>
              </div>
              <p>
                Năm mới, anh chỉ chúc em được nhiều sức khỏe thôi. Còn về hạnh
                phúc và niềm vui, anh mong rằng chính mình sẽ là người mang những
                điều đó đến với em. Yêu em nhiều! Năm mới đến rồi, một năm qua
                thật đặc biệt với anh và cả em nữa. Năm mới đến đồng nghĩa với
                việc anh lại được nối dài năm tháng yêu thương chăm sóc em. Anh
                chúc em tràn đầy hạnh phúc ngọt ngào hãy gìn giữ và nuôi dưỡng
                tình yêu của chúng mình em nhé.
              </p>
              <div className="fixedContent">
                <h3>Người gửi: Lê Văn Do</h3>
              </div>
            </div>
          </div>
        </div>
        <i className="fa-solid fa-xmark" onClick={handleClickIcon}></i>
      </div>
      <audio id="song">
        <source src={MySong} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default App;
