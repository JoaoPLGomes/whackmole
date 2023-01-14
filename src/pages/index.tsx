import Engine from '@/components/Engine/Engine';

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-contain	bg-no-repeat">
      <img src="/WAM_bg.jpg" className="absolute h-full" />
      <Engine />
    </div>
  );
}
