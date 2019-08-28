import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {/* using .slice instead of .filter (from tutorial) to reduce time complexity*/}
        {items.slice(0, 4).map(({ id, ...otherItemProps }) => {
          return <CollectionItem key={id} {...otherItemProps}></CollectionItem>;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
