type TimeProps = {
  minutes: number;
  postfix?: string;
};

export const Time = ({ minutes, postfix = '' }: TimeProps) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += `${hours} hour `;
  }

  if (hours > 0 && remainingMinutes > 0) {
    formattedTime += `and ${remainingMinutes} minutes`;
  }

  if (hours === 0 && remainingMinutes > 0) {
    formattedTime += `${remainingMinutes} minutes`;
  }

  formattedTime += postfix;

  return <span>{formattedTime.trim()}</span>;
};
