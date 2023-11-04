import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { Card, Divider } from "antd";
import React, { useState } from "react";
import AddImageBox from "../components/AddImageBox";
import { Grid } from "../components/Grid";
import Header from "../components/Header";
import useImages from "../hooks/useImages";
import { PhotoContainer } from "./PhotoContainer";

export default function HomeScreen() {
  const data = useImages();
  const items = data.images;

  const [currentImage, setCurrentImage] = useState("");

  function handleDragStart(event) {
    setCurrentImage(items[event.active.id - 1].url);
  }

  function handleDragCancel() {
    setCurrentImage("");
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over?.id || over === null) {
      data.handleToggleSelectedImages(active.id);
    }

    if (active && over) {
      if (active.id !== over?.id) {
        const activeIndex = items.findIndex(({ id }) => id === active.id);
        const overIndex = items.findIndex(({ id }) => id === over.id);
        data.handleUpdateImageList(arrayMove(items, activeIndex, overIndex));
      }
    }

    setCurrentImage("");
  }

  return (
    <div className="m-5">
      <Card bodyStyle={{ padding: 0 }}>
        <div>
          <Header />
          <Divider className="my-0" />
        </div>

        <div className="p-[25px] ">
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragCancel={handleDragCancel}
          >
            <SortableContext items={items} strategy={rectSortingStrategy}>
              <Grid columns={5}>
                {items.map((img, index) => (
                  <PhotoContainer
                    key={img.id}
                    url={img.url}
                    img={img}
                    index={index}
                  />
                ))}
                <AddImageBox />
              </Grid>
            </SortableContext>

            <DragOverlay adjustScale={true}>
              <img
                src={
                  currentImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oZCT1O1uW9TKcdXDr1Ee5Rv3s3eSMoR-6A&usqp=CAU"
                }
                className="w-[250px] h-[200px] rounded-lg"
                alt="currentImage"
              />
            </DragOverlay>
          </DndContext>
        </div>
      </Card>
    </div>
  );
}
