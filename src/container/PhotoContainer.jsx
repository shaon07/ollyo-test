import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import { ImageBox } from "../components/ImageBox";

export const PhotoContainer = (props) => {
  const sortable = useSortable({id: props.img.id});
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <ImageBox
      ref={setNodeRef}
      style={style}
      img={props.img}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};
