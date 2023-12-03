interface IProps {
  label: string;
  number: number;
}

export default function StatInfo({label, number}: IProps) {
  return (
    <div className="grid pb-1">
      <span className="text-light-blue dark:text-dark-white text-xsm mb-2">
        {label}
      </span>
      <span className="text-light-gunmetal dark:text-dark-white font-bold text-xll leading-none">
        {number}
      </span>
    </div>
  );
}
