import { RefObject, useEffect, useState } from 'react';

export function useResizeObserver(
  gridElementRef: RefObject<HTMLElement>,
) {
  const [itemSize, setItemSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const gridElement = gridElementRef.current;
    if (!gridElement) return;

    const getItemSize = () => {
      const tombstone = gridElement.querySelector('li:last-child') as HTMLElement;
      const tombstoneWidth = tombstone.offsetWidth;
      const tombstoneHeight = tombstone.offsetHeight;
      setItemSize({ width: tombstoneWidth, height: tombstoneHeight });
    };

    const observer = new ResizeObserver(getItemSize);

    observer.observe(gridElement);

    return () => observer.disconnect();
  }, []);

  return { itemSize };
}
