import { Card, Divider } from "antd";
import React from "react";
import AddImageBox from "../components/AddImageBox";
import Header from "../components/Header";
import ImageBox from "../components/ImageBox";
import useImages from "../hooks/useImages";

export default function HomeScreen() {
  const data = useImages();

  return (
    <div className="m-5">
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          <Header />
          <Divider className="my-0" />
        </div>

        <div className="p-[25px] container">
          {data.images.map((image, index) => (
            <ImageBox key={index} className={`img-${index + 1}`} img={image} />
          ))}
          <AddImageBox />
        </div>
      </Card>
    </div>
  );
}
