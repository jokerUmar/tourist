import React, { useState, useMemo, useContext, useRef } from "react";
import Select from "react-select";
import "./order.css";
import countryList from "react-select-country-list";
import payme from "../../assets/images/payme.png";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";
import { SummaContext } from "../../components/context/SummaContext";
import PhoneInput from "react-phone-input-2";
import { lang } from "../../lang/Lang";
import { LangContext } from "../../components/context/LangContext";
import { Link } from "react-router-dom";

function Order() {
  const { arrayData } = useContext(ArrayDataContext);
  let { reducer } = useContext(SummaContext);
  let { langData } = useContext(LangContext);

  const options = useMemo(() => countryList().getData(), []);

  let summa = reducer + 30000;
  let reverse_summa = summa.toString().split("").reverse();
  let reverse_cost = reducer.toString().split("").reverse();
  let reverseNumArr = [];
  let reverseSummaArr = [];

  for (let i = 0; i < reverse_cost.length; i++) {
    const element = reverse_cost[i];
    if (i % 3 == 0) {
      reverseNumArr.push(",");
      reverseNumArr.push(element);
    } else {
      reverseNumArr.push(element);
    }
  }
  reverseNumArr.splice(0, 1);

  for (let i = 0; i < reverse_summa.length; i++) {
    const element = reverse_summa[i];
    if (i % 3 == 0) {
      reverseSummaArr.push(",");
      reverseSummaArr.push(element);
    } else {
      reverseSummaArr.push(element);
    }
  }
  reverseSummaArr.splice(0, 1);

  let inp = {
    name: "",
    surName: "",
    companyName: "",
    countryName: "",
    streetHouseName: "",
    streetApartName: "",
    cityName: "",
    regionName: "",
    mailIndex: "",
    telNumber: "",
    emailAddress: "",
  };

  const [inputValue, setInputValue] = useState({
    name: "",
    surName: "",
    companyName: "",
    countryName: "",
    streetHouseName: "",
    streetApartName: "",
    cityName: "",
    regionName: "",
    mailIndex: "",
    telNumber: "",
    emailAddress: "",
  });

  function handleInput(params, e) {
    inputValue[params] = e;
    setInputValue(inputValue);
    console.log(inputValue);
  }

  function handleClick() {}

  return (
    <div className="order">
      {arrayData.length > 0 ? (
        <div className="container">
          <div className="order_box">
            <div className="order_box-left">
              <div className="order-personal">
                <article>
                  <label htmlFor="name">{lang[langData].checkout.name} *</label>
                  <input
                    id="name"
                    type="text"
                    onChange={(e) => handleInput("name", e.target.value)}
                  />
                  <p className="form_error">
                    Ism kamida 1 ta harfdan iborat bo'lishi kerak
                  </p>
                </article>

                <article>
                  <label htmlFor="surname">
                    {lang[langData].checkout.surName} *
                  </label>
                  <input
                    type="text"
                    id="surname"
                    onChange={(e) => handleInput("surName", e.target.value)}
                  />
                  <p className="form_error">
                    familiya kamida 1 ta harfdan iborat bo'lishi kerak
                  </p>
                </article>
              </div>

              <div className="order-firma-name">
                <label htmlFor="firma_name">
                  {lang[langData].checkout.FirmaName}
                </label>
                <input
                  type="text"
                  id="firma_name"
                  onChange={(e) => handleInput("companyName", e.target.value)}
                />
              </div>

              <div className="order-country-name">
                <label htmlFor="country_name">
                  {lang[langData].checkout.country} *
                </label>
                <Select
                  options={options}
                  onChange={(e) => handleInput("countryName", e.label)}
                />
              </div>

              <div className="order-street_address">
                <label htmlFor="street_addres">
                  {lang[langData].checkout.streetAddres.label} *
                </label>
                <input
                  type="text"
                  placeholder={
                    lang[langData].checkout.streetAddres.placeholderFirst
                  }
                  onChange={(e) =>
                    handleInput("streetHouseName", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder={
                    lang[langData].checkout.streetAddres.placeholderSecond
                  }
                  onChange={(e) =>
                    handleInput("streetApartName", e.target.value)
                  }
                />
              </div>

              <div className="order-city-name">
                <label htmlFor="city_name">
                  {lang[langData].checkout.cityName} *
                </label>
                <input
                  type="text"
                  id="city_name"
                  onChange={(e) => handleInput("cityName", e.target.value)}
                />
              </div>

              <div className="order-region-name">
                <label htmlFor="region_name">
                  {lang[langData].checkout.region} *
                </label>
                <input
                  type="text"
                  id="region_name"
                  onChange={(e) => handleInput("regionName", e.target.value)}
                />
              </div>

              <div className="order-mail-index">
                <label htmlFor="mail_index">
                  {lang[langData].checkout.mailIndex} *
                </label>
                <input
                  type="text"
                  id="mail_index"
                  onChange={(e) => handleInput("mailIndex", e.target.value)}
                />
              </div>

              <div className="order-tel-number">
                <label htmlFor="tel_number">
                  {lang[langData].checkout.telNum} *
                </label>
                <PhoneInput
                  country={"uz"}
                  inputStyle={{
                    maxWidth: "900px",
                    width: "100%",
                  }}
                  onChange={(e) => handleInput("telNumber", e)}
                />
              </div>
              <div className="order-email-address">
                <label htmlFor="email_addres">
                  {lang[langData].checkout.emailAddres} *
                </label>
                <input
                  type="text"
                  id="email_addres"
                  onChange={(e) => handleInput("emailAddress", e.target.value)}
                />
              </div>
            </div>

            <div className="order_box-right">
              <h2 className="order_box-title">Buyurtmangiz</h2>
              <div className="order_box-head">
                <p>{lang[langData].checkout.product}</p>
                <p>{lang[langData].checkout.allName}:</p>
              </div>

              <div className="order_box-list">
                {arrayData.map((el) => {
                  return (
                    <div key={el.id} className="order_box-item">
                      <p>
                        {el.title_info} ×{el.count}
                      </p>
                      <p>{el.cost_str}.00 UZS</p>
                    </div>
                  );
                })}
              </div>

              <div className="order_box-list-result">
                <p>{lang[langData].checkout.allName}:</p>
                <p>{reverseNumArr.reverse().join("")}.00 UZS</p>
              </div>

              <div className="order_box-delivery">
                <p>{lang[langData].checkout.delivery}</p>
                <p>Yagona narx: 30,000.00 UZS</p>
              </div>

              <div className="order_box-result">
                <p>{lang[langData].checkout.all_cost}:</p>
                <p>{reverseSummaArr.reverse().join("")}.00 UZS</p>
              </div>

              <div className="control">
                <label className="radio">
                  <input type="radio" name="foobar" className="off" />
                  Naqd pulda to'lash
                </label>
                <label class="radio">
                  <input type="radio" name="foobar" className="on" checked />
                  Payme
                  <img
                    src={payme}
                    width={"80px"}
                    style={{ marginLeft: "10px" }}
                    alt=""
                  />
                </label>
              </div>

              <p className="order_box-text">
                Ваши личные данные будут использоваться для обработки ваших
                заказов, упрощения вашей работы с сайтом и для других целей,
                описанных в нашей
              </p>

              <div className="order-btn_box">
                <button onClick={handleClick} className="take-order-btn">
                  {lang[langData].checkout.btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty_checkout-box">
          <div className="container">
            <h1 className="empty-checkout">
              {lang[langData].emptyCheckout.info}
            </h1>
            <div className="empty_travel-box">
              <Link to="/travel" className="empty-travel">
                {lang[langData].emptyCheckout.link}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
