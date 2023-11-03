import {
  DndContext,
  DragOverlay,
  closestCenter
} from "@dnd-kit/core";
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
  const [item, setItems] = useState(data.images);


  function handleDragEnd(event) {
    console.log("event", event);
    const { active, over } = event;

    if(active && over){
      if (active.id !== over?.id) {
        setItems((items) => {
          const activeIndex = items.findIndex(({ id }) => id === active.id);
          const overIndex = items.findIndex(({ id }) => id === over.id);
  
          return arrayMove(items, activeIndex, overIndex);
        });
      }
    }
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
          >
            <SortableContext items={item} strategy={rectSortingStrategy}>
              <Grid columns={5}>
                {item.map((img, index) => (
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

            <DragOverlay adjustScale={true}></DragOverlay>
          </DndContext>
        </div>
      </Card>
    </div>
  );
}
