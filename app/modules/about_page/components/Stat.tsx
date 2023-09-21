type StatProps = {
  stat: {
    title: string;
    subtitle: string;
    subtitle2: string;
    titleClassName: string;
    subtitleClassName: string;
  };
};

export default function Stat({ stat }: StatProps) {
  return (
    <div className="flex h-[210px] w-[300px] flex-col items-center justify-center gap-7 rounded-2xl border border-neutral-800/50 bg-gradient-to-br from-neutral-800 to-neutral-950 p-5">
      <p className={stat.titleClassName}>{stat.title}</p>
      <p className={stat.subtitleClassName}>
        <span>{stat.subtitle}</span>
        <span>{stat.subtitle2}</span>
      </p>
    </div>
  );
}
