import { formatDistance, parseISO } from 'date-fns';

const TimesAgo = ({ timePosted }) => {
  const result = formatDistance(new Date().getTime(), new Date(timePosted));
  return <p>Posted about {result}</p>;
};

export default TimesAgo;
