'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Header from '@/widgets/header/ui/header';
import ResortList from '@/widgets/resort/ui/resort-list';
import { resortApi } from '@/entities/resort';
import { cn } from '@/shared/lib';

const ResortListPage = () => {
  const { data: resorts } = useQuery(resortApi.resortQueries.list());

  useEffect(() => {
    gtag('event', 'home_view');
    return () => {
      gtag('event', 'home_exit');
    };
  }, []);

  if (!resorts) return null;

  return (
    <div className={cn('size-full bg-gradient-to-b from-[rgba(141,163,221,0.2)] to-transparent')}>
      <Header hasMenuButton />
      <ResortList resorts={resorts} />
    </div>
  );
};

export default ResortListPage;
