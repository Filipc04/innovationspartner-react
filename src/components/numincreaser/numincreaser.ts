export const numIncrease = (
  num: number,
  setter: (val: number) => void,
  duration: number = 1500
) => {
  const totalSteps = 60;
  const stepSize = Math.ceil(num / totalSteps); 
  const interval = duration / totalSteps;       

  let count = 0;
  const intervalId = setInterval(() => {
    count = Math.min(count + stepSize, num); 
    setter(count);
    if (count >= num) {
      clearInterval(intervalId);
    }
  }, interval);
};