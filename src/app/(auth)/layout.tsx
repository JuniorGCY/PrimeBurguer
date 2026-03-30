import Image from "next/image";
import BannerImg from '@/assets/bannerPrimeBurguer.png';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl 
                      flex flex-col items-center gap-8">
        
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full aspect-[16/9] max-h-[260px] lg:max-h-[280px] overflow-hidden rounded-2xl shadow-md">
            <Image
              src={BannerImg}
              alt="Banner Prime Burger"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 560px, 640px"
              className="object-cover"
            />
          </div>

          <h1 className="mt-6 text-4xl text-black font-bold text-center tracking-tight">
            Prime <span className="text-red-600">Burger</span>
          </h1>
        </div>

        <main className="w-full max-w-sm">
          {children}
        </main>
      </div>
    </div>
  );
}