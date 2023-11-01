import { Card, Divider } from "antd";
import React from "react";
import AddImageBox from "../components/AddImageBox";
import Header from "../components/Header";
import ImageBox from "../components/ImageBox";

let imgCount = [];

for(let i = 0; i < 10; i++) {
  imgCount.push(i);
}

export default function HomeScreen() {
  return (
    <div className="m-5">
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          <Header />
          <Divider className="my-0" />
        </div>

        <div className="p-[25px] container">
          {
            imgCount.map((item, index) => (
              <ImageBox key={index} className={`img-${index+1}`} img={index+1} />
            ))
          }
          <AddImageBox />
        </div>
      </Card>
    </div>
  );
}
