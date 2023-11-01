import { Card, Divider } from "antd";
import React from "react";
import Header from "../components/Header";
import ImageBox from "../components/ImageBox";

export default function HomeScreen() {
  return (
    <div className="m-5">
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          <Header />
          <Divider className="my-0" />
        </div>

        <div className="p-[25px] ">
          <ImageBox />
        </div>
      </Card>
    </div>
  );
}
