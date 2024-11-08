{
  const sumArray = (numbers: number[]): number => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    return sum;
  };

  //   Sample input:
  // sumArray([1, 2, 3, 4, 5]);
}
