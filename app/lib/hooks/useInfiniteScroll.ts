import { RefObject, useEffect, useState } from 'react';

const THRESHOLD = 2;

export function useInfiniteScroll(
  scrollableElementRef: RefObject<HTMLElement>,
  itemSize: { width: number, height: number },
) {
  const [gridScrollState, setGridScrollState] = useState({
    topOffsetRow: 0,
    gridPosition: 0,
  });

  useEffect(() => {
    const scrollableElement = scrollableElementRef.current;
    if (!scrollableElement) return;

    const updateGridScrollState = () => {
      const newVisibleRow = Math.floor(scrollableElement.scrollTop / itemSize.height);
      const newTopOffsetRow = Math.max(0, newVisibleRow - THRESHOLD);
      const newGridPosition = newTopOffsetRow * itemSize.height;
      setGridScrollState({ topOffsetRow: newTopOffsetRow, gridPosition: newGridPosition });
    };

    scrollableElement.addEventListener('scroll', updateGridScrollState);

    return () => scrollableElement.removeEventListener('scroll', updateGridScrollState);
  }, [itemSize]);

  return { gridScrollState };
}
