import { cn } from '@/shared/lib';

interface DiscoverySummaryActionProps {
  name: string;
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const DiscoverySummaryAction = ({ name, title, icon, onClick }: DiscoverySummaryActionProps) => {
  return (
    <div
      key={name}
      className={cn(
        'flex cursor-pointer flex-col items-center gap-[7px] text-gray-60 transition-all hover:scale-[1.02] hover:text-main-1'
      )}
      onClick={onClick}
    >
      {icon}
      <p className={cn('body1-semibold')}>{title}</p>
    </div>
  );
};

export default DiscoverySummaryAction;