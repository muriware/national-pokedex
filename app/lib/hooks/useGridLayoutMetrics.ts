import { RefObject, useEffect, useMemo, useState } from 'react';

const BOTTOM_ROWS_THRESHOLD = 4;

export function useGridLayoutMetrics(
  scrollableElementRef: RefObject<HTMLElement>,
  gridElementRef: RefObject<HTMLElement>,
  itemSize: { width: number; height: number },
  gridScrollState: { topOffsetRow: number },
  itemCount: number,
) {
  const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const scrollableElement = scrollableElementRef.current;
    const gridElement = gridElementRef.current;

    if (scrollableElement && gridElement) {
      const gridWidth = gridElement.offsetWidth;
      const gridHeight = scrollableElement.offsetHeight - gridElement.getBoundingClientRect().top;
      setGridDimensions({ width: gridWidth, height: Math.max(itemSize.height, gridHeight) });
    }
  }, [itemSize]);

  const itemsPerRow = useMemo(
    () => {
      const itemPerRowRatio = gridDimensions.width / itemSize.width;
      if (isNaN(itemPerRowRatio) || !isFinite(itemPerRowRatio)) {
        return 0;
      }
      return Math.floor(itemPerRowRatio);
    },
    [gridDimensions.width, itemSize.width]
  );

  const totalRows = useMemo(
    () => {
      const totalRowRatio = itemCount / itemsPerRow;
      if (!isFinite(totalRowRatio)) {
        return 0;
      }
      return Math.ceil(totalRowRatio);
    },
    [itemCount, itemsPerRow]
  );

  const totalHeight = useMemo(
    () => totalRows * itemSize.height,
    [totalRows, itemSize.height]
  );

  const itemsRange = useMemo(
    () => {
      const lastVisibleRow = Math.ceil(gridDimensions.height / itemSize.height);
      const firstIndex = gridScrollState.topOffsetRow * itemsPerRow;
      const lastIndex = firstIndex + (lastVisibleRow * itemsPerRow) + (BOTTOM_ROWS_THRESHOLD * itemsPerRow);

      if (isNaN(firstIndex) || isNaN(lastIndex)) {
        return { start: 0, end: 0 };
      }
      return { start: firstIndex, end: lastIndex };
    },
    [
      gridScrollState.topOffsetRow,
      itemsPerRow,
      gridDimensions.height,
      itemSize,
    ]
  );

  return {
    gridDimensions,
    gridMaxHeight: totalHeight,
    itemsRange,
  };
}
