import React from 'react';
import { HotPlace } from '@/types/HotPlace';

interface HotPlaceDetailCardProps {
  item : HotPlace
}

export default function HotPlaceDetailCard({item} : HotPlaceDetailCardProps) {
  return (
    <div>
          {item.ADDR1}
    </div>
  );
}