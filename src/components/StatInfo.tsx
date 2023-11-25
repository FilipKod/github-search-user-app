interface IProps {
  label: string;
  number: number;
}

export default function StatInfo({label, number}: IProps) {
  return (
    <div className="grid pb-1">
      <span className="text-[#4B6A9B] text-[13px] mb-2">{label}</span>
      <span className="text-[#2B3442] font-bold text-[22px] leading-none">
        {number}
      </span>
    </div>
  );
}
