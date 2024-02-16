'use client'

import { useRef } from 'react';
import { useResizeObserver } from '@/app/lib/hooks/useResizeObserver';
import { useInfiniteScroll } from '@/app/lib/hooks/useInfiniteScroll';
import { useGridLayoutMetrics } from '@/app/lib/hooks/useGridLayoutMetrics';
import { PokemonEntries } from '@/app/lib/types';
import Container from '@/app/ui/container';
import List from '@/app/ui/list';

export default function InfiniteScroller({
  pokemonEntries,
}: {
  pokemonEntries: PokemonEntries;
}) {
  const scrollableElementRef = useRef(null);
  const scrollEndRef = useRef(null);
  const gridElementRef = useRef(null);
  const { itemSize } = useResizeObserver(scrollableElementRef);
  const { gridScrollState } = useInfiniteScroll(scrollableElementRef, itemSize);
  const {
    gridDimensions,
    gridMaxHeight,
    itemsRange,
  } = useGridLayoutMetrics(scrollableElementRef, gridElementRef, itemSize, gridScrollState, pokemonEntries.length);
  // console.log(itemSize);
  // console.log(gridScrollState);
  // console.log('gridDimensions', gridDimensions);
  // console.log('gridMaxHeight', gridMaxHeight);
  console.log('itemsRange', itemsRange);

  return (
    <main
      ref={scrollableElementRef}
      className='flex h-screen w-full flex-col items-center overflow-y-scroll bg-stone-300 px-5'
    >
      {/*
        <div className='min-h-96 w-full max-w-4xl' />
        <div className='fixed left-0 top-96 h-px w-full bg-green-400' />
        <div className='fixed left-0 bottom-96 h-px w-full bg-green-400' />
      */}
      <Container>
        <div
          ref={scrollEndRef}
          className='absolute h-4 w-4 bg-red-400 transition-transform duration-200'
          style={{ transform: `translate(0, ${0}px)` }}
        />

        <List ref={gridElementRef} gridPosition={gridScrollState.gridPosition} itemsRange={itemsRange} />
      </Container>
    </main>
  );
}
