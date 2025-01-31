'use client';

import { MyList } from "react-tiny-design-system";
import { FC, useState } from 'react';

const ClientList: FC<any> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[1].id);
  
  const handleSelectItem = (item: any) => {
    setSelectedItem(item.id);
  }
  
  return (
    <MyList highlightedItem={selectedItem} onClickListItem={(e) => handleSelectItem(e.detail)} items={items} />
  );
};

export default ClientList;
