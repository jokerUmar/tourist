import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import tailand_img from "../../assets/images/tailand-img-1.jpg";
import egypt_img from "../../assets/images/egypt.jpg";
import antalya_img from "../../assets/images/antalya.jpg";
import dubay_img from "../../assets/images/dubay.jpg";
import Card from "../Card/Card";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let data = [
    {
      id:0,
      type: "xorijga sayohat",
      title: "Tailand",
      cost_str: "16,850,000",
      cost_num: 16850000,
      img: tailand_img,
      count:0,
      key: uuidv4(),
      content: (
        <Card
          imagen={tailand_img}
          title={"Tailand"}
          cost_num={16850000}
          cost_str={"16,850,000"}
        />
      ),
    },
    {
      id:1,
      type: "xorijga sayohat",
      title: "Misr",
      cost_str: "9,058,000",
      cost_num: 9058000,
      img: egypt_img,
      count:0,
      key: uuidv4(),
      content: (
        <Card
          imagen={egypt_img}
          title={"Misr"}
          cost_num={"9,058,000"}
          cost_str={9058000}
        />
      ),
    },
    {
      id:2,
      type: "xorijga sayohat",
      title: "Antalya",
      cost_str: "19,880,000",
      cost_num: 19880000,
      img: antalya_img,
      count:0,
      key: uuidv4(),
      content: (
        <Card
          imagen={antalya_img}
          title={"Antalya"}
          cost_num={19880000}
          cost_str={"19,880,000"}
        />
      ),
    },
    {
      id:3,
      type: "xorijga sayohat",
      title: "Dubay",
      cost_str: "21,000,000",
      cost_num: 21000000,
      img: dubay_img,
      count:0,
      key: uuidv4(),
      content: (
        <Card
          imagen={dubay_img}
          title={"Dubay"}
          cost_num={21000000}
          cost_str={"21,000,000"}
        />
      ),
    },
  ];

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};
