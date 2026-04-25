export const formatDate = (str: string) => {
  const date = new Date(str);
  const options: any = { weekday: 'short', day: '2-digit', month: 'short' };
  return date.toLocaleDateString('en-GB', options);
};

export const calculateWeeksPassed = (str: string) => {
  const givenDate: any = new Date(str);
  const currentDate: any = new Date();
  const differenceInMs: number = currentDate - givenDate;
  const weeksPassed = differenceInMs / (1000 * 60 * 60 * 24 * 7);
  return Math.floor(weeksPassed);
};
