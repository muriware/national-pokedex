export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative w-full max-w-4xl'>
      {children}
    </div>
  );
}
