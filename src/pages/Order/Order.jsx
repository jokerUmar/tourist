import React, { useState, useMemo, useContext } from "react";
import Select from "react-select";
import "./order.css";
import countryList from "react-select-country-list";
import payme from "../../assets/images/payme.png";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";
import { SummaContext } from "../../components/context/SummaContext";
import PhoneInput from "react-phone-input-2";

function Order() {
  const { arrayData, setArrayData , soldAdmission,setSoldAdmission } = useContext(ArrayDataContext);
  let { reducer, setReducer } = useContext(SummaContext);
  const [data, setData] = useState("");

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

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

  return (
    <div className="order">
      {
        (arrayData.length > 0) ? 
        <div className="container">
          <div className="order_box">
            <div className="order_box-left">
              <div className="order-personal">
                <article>
                  <label htmlFor="name">Ism *</label>
                  <input id="name" type="text" />
                </article>

                <article>
                  <label htmlFor="surname">Familiya *</label>
                  <input type="text" id="surname" />
                </article>
              </div>

              <div className="order-firma-name">
                <label htmlFor="firma_name">Firma nomi (ixtiyoriy)</label>
                <input type="text" id="firma_name" />
              </div>

              <div className="order-country-name">
                <label htmlFor="country_name">Mamlakat / mintaqa *</label>
                <Select
                  options={options}
                  value={value}
                  onChange={changeHandler}
                />
              </div>

              <div className="order-street_address">
                <label htmlFor="street_addres">Ko'cha manzili *</label>
                <input type="text" placeholder="Uy raqami va ko'cha nomi" />
                <input
                  type="text"
                  placeholder="Kvartira , ko'rpus va boshqalar. (ixtiyoriy)"
                />
              </div>

              <div className="order-city-name">
                <label htmlFor="city_name">Shahar / qishloq nomi *</label>
                <input type="text" id="city_name" />
              </div>

              <div className="order-region-name">
                <label htmlFor="region_name">Viloyat *</label>
                <input type="text" id="region_name" />
              </div>

              <div className="order-mail-index">
                <label htmlFor="mail_index">Pochta indeksi *</label>
                <input type="text" id="mail_index" />
              </div>

              <div className="order-tel-number">
                <label htmlFor="tel_number">Telefon raqami *</label>
                <PhoneInput
                  country={"uz"}
                  inputStyle={{
                    maxWidth: "900px",
                    width: "100%",
                  }}
                  onChange={(phone) => setData({ phone })}
                />
              </div>

              <div className="order-email-address">
                <label htmlFor="email_addres">Email manzil *</label>
                <input type="text" id="email_addres" />
              </div>
            </div>

            <div className="order_box-right">
              <h2 className="order_box-title">Buyurtmangiz</h2>
              <div className="order_box-head">
                <p>Mahsulot</p>
                <p>Jami:</p>
              </div>

              <div className="order_box-list">
                {arrayData.map((el) => {
                  return (
                    <div key={el.id} className="order_box-item">
                      <p>
                        {el.title}ga sayohat ×{el.count}
                      </p>
                      <p>{el.cost_str}.00 UZS</p>
                    </div>
                  );
                })}
              </div>

              <div className="order_box-list-result">
                <p>jami:</p>
                <p>{reverseNumArr.reverse().join("")}.00 UZS</p>
              </div>

              <div className="order_box-delivery">
                <p>Yetkazib berish</p>
                <p>Yagona narx: 30,000.00 UZS</p>
              </div>

              <div className="order_box-result">
                <p>jami:</p>
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
                <button className="take-order-btn">
                  Buyurtmani tasdiqlang
                </button>
              </div>
            </div>
          </div>
        </div>
        : <h1>bu sahifani ishlatish uchun savat sahifasidan buyurtma qilish kerak</h1>
      }
    </div>
  );
}

export default Order;
