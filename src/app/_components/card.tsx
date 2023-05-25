type CardProps = {
  title: string;
  data: string | number;
  unit?: string;
};

export const Card = ({ title, data, unit }: CardProps) => {
  return (
    <div className="flex flex-col rounded-sm px-3 py-2.5 bg-neutral-800">
      <div className="font-medium text-md text-neutral-300 uppercase">
        {title}
      </div>
      <div className="text-2xl font-semibold">
        {data}
        {unit && <span className="text-sm text-neutral-100">&nbsp;{unit}</span>}
      </div>
    </div>
  );
};
