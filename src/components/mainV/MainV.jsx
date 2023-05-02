import React, { useContext, useEffect, useReducer, useState } from "react";
import "./main.css";
import { DataContext } from "../context/DataContext";
import Carroussel from "../carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMap,
  faHotTub,
  faStar,
  faPassport,
  faCar,
  faPeopleArrows,
  faHamburger,
  faHotel,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import ecoturizm from "../../assets/images/ecoturizm.jpg";
import { NavLink } from "react-router-dom";
import ImgCarousel from "../imgCarousel/ImgCarousel";
import { CarouselShowContext } from "../context/carouselShowContext";
import Services from "../services/Services";
import SectionCard from "../sectionCard/SectionCard";
import { ArrayDataContext } from "../context/ArrayDataContext";
function MainV() {
  const [circleCount, setCircleCount] = useState(1);

  let { data } = useContext(DataContext);
  const { goToSlide, setGoToSlide } = useContext(CarouselShowContext);
  let {arrayData,setArrayData} = useContext(ArrayDataContext)


  function handlePrev() {
    if (data.length - 1 != goToSlide) {
      setGoToSlide(goToSlide + 1);
      setCircleCount(circleCount + 1);
    } else {
      setCircleCount(1);
      setGoToSlide(0);
    }
  }


  function handleMinus() {
    if (goToSlide > 0) {
      setCircleCount(circleCount - 1);
      setGoToSlide(goToSlide - 1);
    } else {
      setCircleCount(data.length);
      setGoToSlide(data.length - 1);
    }
  }

  function handlecircle(e) {
    setCircleCount(e);
    setGoToSlide(e - 1);
  }

  return (
    <>
      <section
        className="main"
        style={{ backgroundImage: `url(${data[goToSlide].img}` }}
      >
        <div className="container">
          <main className="hero">
            <div className="hero_child">
              <div className="line-box">
                <span className="line"></span>
                <button
                  onClick={() => handlecircle(1)}
                  className={`circle circle-1 ${
                    circleCount == 1 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 1 ? "1" : ""}
                </button>
                <button
                  onClick={() => handlecircle(2)}
                  className={`circle circle-2 ${
                    circleCount == 2 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 2 ? "2" : ""}
                </button>
                <button
                  onClick={() => handlecircle(3)}
                  className={`circle circle-3 ${
                    circleCount == 3 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 3 ? "3" : ""}
                </button>
                <button
                  onClick={() => handlecircle(4)}
                  className={`circle circle-4 ${
                    circleCount == 4 ? "active-circle" : ""
                  } `}
                >
                  {circleCount == 4 ? "4" : ""}
                </button>
              </div>

              <div className="text">
                <div className="text-box">
                  <h1>Birga dunyoni ko'ramiz</h1>
                </div>
              </div>
              <Carroussel
                cards={data}
                height="500px"
                width="30%"
                margin="0 auto"
                offset={2}
                showArrows={false}
                setCircleCount={setCircleCount}
                circleCount={circleCount}
              />
            </div>
          </main>
        </div>

        <div className="hero-footer">
          <div className="container">
            <FontAwesomeIcon
              className="circle-chivron"
              onClick={handleMinus}
              style={{ fontSize: "36px", marginRight: "5px" }}
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              className="circle-chivron"
              onClick={handlePrev}
              style={{ fontSize: "36px", marginLeft: "5px" }}
              icon={faChevronRight}
            />
          </div>
        </div>
      </section>

      <Services />
      {/* 
    <section className="ecoturizm">
        <div className="container">
            <img src={ecoturizm} className='eco_img' alt="" />
            <div className="eco_box">
                <h1>Ekoturizm</h1>
                <article>
                    Sayyohlik kompaniyalari ekoturlarni tashkil qilishda ko‘pincha nimani taklif qilishadi?
                </article>
                <p>Agar siz O‘zbekistonning go‘zal tabiati va noyob qo‘riqlanadigan hududlari, nodir hayvonlar va
                    qushlar
                    olamidan bahramand bo‘lishni istasangiz, mamlakatimizning milliy bog‘lari va qo‘riqxonalariga
                    tashrif
                    buyuring
                </p>

            </div>
        </div>
    </section> */}

      <SectionCard/>

      {/* <section className="content">
        <div className="container">
            <h1>O'zbekiston haqida qiziqarli ma'lumotlar</h1>
            <div className="line"></div>
            <div className="content-box">
                <div className="content_article">
                    <div className="content_upper">
                        <FontAwesomeIcon style={{color:"white"}} icon={faStar} />
                    </div>
                    <div className="content_body">
                        <p>Birinchi tashrifingizdan bizning mamlakatimiz sizni yana va yana bu yerga kelishga undaydigan
                            g‘ayrioddiy tuyg‘ularni uyg‘otad.</p>
                    </div>
                </div>
                <div className="content_article">
                    <div className="content_upper">
                        <FontAwesomeIcon style={{color:"white"}} icon={faStar} />
                    </div>
                    <div className="content_body">
                        <p>Toshkentda siz dunyodagi eng go'zal metroda yurishingiz yoki Usmon Qur'onning qadimiy
                            qo'lyozmasini ko'rishingiz mumkin.</p>
                    </div>
                </div>
                <div className="content_article">
                    <div className="content_upper">
                        <FontAwesomeIcon style={{color:"white"}} icon={faStar} />
                    </div>
                    <div className="content_body">
                        <p> Toshkentda siz dunyodagi eng go'zal metroda yurishingiz yoki Usmon Qur'onning qadimiy
                            qo'lyozmasini ko'rishingiz mumkin.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

      {/* <section className="youTube_content">
        <article className="container">
            <iframe  src="https://www.youtube.com/embed/vQVwkyn3-F8"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </article>  
    </section> */}

      {/* <div className="carousel">
        <h1></h1>
        <div className="container">
            <ImgCarousel/>
        </div>
    </div> */}
    </>
  );
}

export default MainV;
