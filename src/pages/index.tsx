import Engine from '@/components/Engine/Engine';
import MenuModal from '@/components/MenuModal/MenuModal';

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-contain	bg-no-repeat">
      <img src="/WAM_bg.jpg" className="absolute h-full w-full" />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat "/> */}
      <Engine />
    </div>
  );
}
