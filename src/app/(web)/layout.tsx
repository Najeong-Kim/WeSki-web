'use client';

import { cn } from '@/shared/lib';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn('flex size-full justify-center bg-main-5 antialiased')}>
      <div
        className={cn('size-full max-w-[670px] bg-opacity-65 bg-[url("/assets/background.png")]')}
      >
        {children}
      </div>
    </div>
  );
}