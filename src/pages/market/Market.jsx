import React, { useContext } from "react";
import "./market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";
import { SummaContext } from "../../components/context/SummaContext";
import { Link } from "react-router-dom";

function Market() {
  let { arrayData, setArrayData } = useContext(ArrayDataContext);
  let { reducer, setReducer } = useContext(SummaContext);

  function handleDelete(e) {
    let filterArr = arrayData.filter((fil) => fil.id != e.id);
    setArrayData(filterArr);
    setReducer(reducer - e.cost_num * e.count);
  }

  function handleIncrement(e) {
    e.count++;
    setArrayData([...arrayData]);
    setReducer(reducer + e.cost_num);
  }

  function handleDecrement(e) {
    if (e.count > 1) {
      e.count--;
      setArrayData([...arrayData]);
      setReducer(reducer - e.cost_num);
    }
  }

  let reverse_cost = reducer.toString().split("").reverse();
  let reverseNumArr = [];

  for (let i = 0; i < reverse_cost.length; i++) {
    const element = reverse_cost[i];
    if ((i ) % 3 == 0 ) {
      reverseNumArr.push(",");
      reverseNumArr.push(element);
    } else {
      reverseNumArr.push(element);
    }
  }
  reverseNumArr.splice(0,1)

  return (
    <div className="market">
      <div className="container">
        <h1 className="market_title">Savat</h1>
        {arrayData.length > 0 ? (
          <div className="all-box">
            <div className="market-parent">
              {arrayData.map((element) => {
                return (
                  <div className="market-box" key={element.id}>
                    <div className="market-box_left">
                      <img className="market-img" src={element.img} alt="" />
                      <article>
                        <p> {element.title}ga sayohat</p>
                        <span>uzs {element.cost_str}</span>
                      </article>
                    </div>

                    <div className="market-box_right">
                      <div className="counter-box">
                        <button
                          className="counter-minus"
                          onClick={() => handleDecrement(element)}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <input
                          className="counter-number"
                          value={element.count}
                          type="number"
                        />
                        <button
                          className="counter-plus"
                          onClick={() => handleIncrement(element)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>
                      <div
                        className="counter-trash"
                        onClick={() => handleDelete(element)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="reducer-box">
              <div className="article">
                <span className="reducer_text">jami : </span>
                <span className="reducer_cost">
                  UZS {reverseNumArr.reverse().join("")}.00
                </span>
              </div>
              <Link to="/checkout" style={{textDecoration:"none"}}>
                <button className="reducer_btn">Buyurtma berish</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="empty-box">
            <p>Savatingiz boʻsh</p>
            <p>Savatingizga qoʻshadigan sayohatlar shu yerda koʻrsatiladi.</p>
            <div className="empty_travel-box">
              <Link to="/travel" className="empty-travel">
                sayohatlar bo'limiga otish
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Market;
