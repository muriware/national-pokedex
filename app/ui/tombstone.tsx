import clsx from 'clsx';

export default function Tombstone({
  isHidden,
}: {
  isHidden?: boolean;
}) {
  return (
    <li
      className={clsx(
        'size-full p-2.5',
        {
          'opacity-0': isHidden,
        }
      )}
    >
      <div className='relative aspect-square h-auto w-full'>
        <div className='absolute size-full origin-bottom scale-90 rounded-full bg-stone-400 drop-shadow-md'>
          <svg className='size-full scale-90' viewBox='0 0 595.3 594.1'>
            <path fill='#9b9593' d='M299 82.5c113 0 205.7 86.7 215.1 197.2H379.7c-8-38-41.7-66.6-82.1-66.6s-74.1 28.6-82.1 66.6H83.9C93.4 169.2 186.1 82.5 299 82.5m44.9 197.2c2 5.4 3.1 11.2 3.1 17.3h.1c0 6.1-1.1 11.9-3.1 17.3-7 18.8-25.1 32.1-46.3 32.1s-39.3-13.4-46.3-32.1c-2-5.4-3.1-11.2-3.1-17.3h-.1c0-6.1 1.1-11.9 3.1-17.3 7-18.8 25.1-32.1 46.3-32.1s39.3 13.4 46.3 32.1m-47.7 231.9c-113 0-205.7-86.7-215.1-197.2h134.4c8 38 41.7 66.6 82.1 66.6s74.1-28.6 82.1-66.6h131.7c-9.5 110.4-102.2 197.2-215.2 197.2m1.4-470.3C156.4 41.3 41.9 155.8 41.9 297s114.5 255.7 255.7 255.7S553.4 438.3 553.4 297 438.9 41.3 297.6 41.3' />
          </svg>
        </div>
      </div>
      <div className='translate-x-[5%] @container md:translate-x-[10%]'>
        <p className='text-[24cqw] text-[#9b9593] drop-shadow-md md:text-[18cqw]'>----</p>
      </div>
    </li>
  );
}
