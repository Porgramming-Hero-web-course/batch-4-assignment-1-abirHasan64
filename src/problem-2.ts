{
  const removeDuplicates = (numbers: number[]): number[] => {
    const remove = numbers.filter(
      (number, index) => numbers.indexOf(number) === index
    );
    console.log(remove);
    return remove;
  };
  //   Sample input:
  // removeDuplicates([1, 2, 2, 2, 3, 4, 6, 3, 5, 20]);
}
