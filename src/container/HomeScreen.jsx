import { arrayMove } from "@dnd-kit/sortable";
import React, { useState } from "react";
import HomeViews from "../components/views/Homepage";
import useImages from "../hooks/useImages";

export default function HomeScreen() {
  const { images, handleToggleSelectedImages, handleUpdateImageList } =
    useImages();
  const [currentImage, setCurrentImage] = useState("");
  const items = images;

  function handleDragStart(event) {
    const activeIndex = items.findIndex(({ id }) => id === event.active.id);
    setCurrentImage(items[activeIndex].url);
  }

  function handleDragCancel() {
    setCurrentImage("");
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id === over?.id || over === null) {
      handleToggleSelectedImages(active.id);
    }

    if (active && over) {
      if (active.id !== over?.id) {
        const activeIndex = items.findIndex(({ id }) => id === active.id);
        const overIndex = items.findIndex(({ id }) => id === over.id);
        handleUpdateImageList(arrayMove(items, activeIndex, overIndex));
      }
    }

    setCurrentImage("");
  }

  return (
    <HomeViews
      items={items}
      currentImage={currentImage}
      handleDragEnd={handleDragEnd}
      handleDragStart={handleDragStart}
      handleDragCancel={handleDragCancel}
    />
  );
}
