import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { Card, Divider } from "antd";
import React from "react";
import { PhotoContainer } from "../../container/PhotoContainer";
import AddImageBox from "../AddImageBox";
import { Grid } from "../Grid";
import Header from "../Header";
import { styles } from "./index.css";

export default function HomeViews({
  items,
  currentImage,
  handleDragEnd = () => {},
  handleDragStart = () => {},
  handleDragCancel = () => {},
}) {
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
              {currentImage && (
                <img
                  src={currentImage}
                  alt="placeholder"
                  className={`${styles.placeholderImage}`}
                />
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </Card>
    </div>
  );
}
