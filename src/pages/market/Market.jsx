import React,{useContext} from "react";
import "./market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ArrayDataContext } from "../../components/context/ArrayDataContext";


function Market() {

  let {arrayData , setArrayData} = useContext(ArrayDataContext)

    function handleDelete(e) {
     let filterArr = arrayData.filter(fil => fil.id != e.id)
     setArrayData(filterArr)
    }

    function handleIncrement(e) {
      e.count++
      setArrayData([...arrayData])
    }

    function handleDecrement(e) {
      if (e.count>0) {
        e.count--
        setArrayData([...arrayData])
      }
    }



  return (
    <div className="market">
      <div className="container">
        <h1 className="market_title">Savat</h1>
        <div className="all-box">
          <div className="market-parent">

        {
         arrayData.map(element => {

            return <div className="market-box">
              <div className="market-box_left">
                <img className="market-img" src={element.img} alt="" />
                <article>
                  <p> {element.title}ga sayohat</p>
                  <span>uzs {element.cost_str}</span>
                </article>
              </div>
    
              <div className="market-box_right">
                <div className="counter-box">
                  <button className="counter-minus"onClick={()=>handleDecrement(element)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input className="counter-number" value={element.count} type="number" />
                  <button className="counter-plus" onClick={()=>handleIncrement(element)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="counter-trash" onClick={()=>handleDelete(element)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              </div>
            </div>  
            
    
          })
        }

            </div>
        <div className="reducer-box">
          <div className="article">
          <span className="reducer_text">jami : </span>
          <span className="reducer_cost">UZS 123,123,312,1312</span>
          </div>
          <button className="reducer_btn">Buyurtma berish</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Market;
