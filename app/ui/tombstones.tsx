export function ListItemTombstone() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='relative'>
        <div className='absolute h-full w-full origin-bottom scale-90 rounded-full bg-stone-400 drop-shadow-md' />
        <div className='relative z-10 origin-bottom scale-90'>
          <svg className='h-auto w-full max-w-[475px]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 595.3 594.1'>
            <path fill='#C0BBB8' d='M297.7 213.2c40.4 0 74.1 28.6 82.1 66.6h134.4C504.7 169.2 412 82.5 299 82.5S93.4 169.2 83.9 279.7h131.7c8-38 41.7-66.5 82.1-66.5' />
            <path fill='#CECCCA' d='M297.6 380.9c-40.4 0-74.1-28.6-82.1-66.6H81.1c9.5 110.5 102.2 197.2 215.1 197.2s205.7-86.7 215.1-197.2H379.7c-8 38.1-41.7 66.6-82.1 66.6' />
            <path fill='#CECCCA' d='M347.1 297q-.15 0 0 0c-.1-6.1-1.2-11.9-3.2-17.3-7-18.8-25.1-32.1-46.3-32.1s-39.3 13.4-46.3 32.1c-2 5.4-3.1 11.2-3.1 17.3h.1c0 6.1 1.1 11.9 3.1 17.3 7 18.8 25.1 32.1 46.3 32.1S337 333 344 314.3c2-5.3 3.1-11.2 3.1-17.3' />
          </svg>
        </div>
      </div>
      <div className='translate-x-[5%] @container md:translate-x-[10%]'>
        <span className='text-[24cqw] text-stone-400 drop-shadow-md md:text-[18cqw]'>----</span>
      </div>
    </div>
  );
}
