{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.toLowerCase().split(" ");
    const count = words.filter((w) => w === lowerCaseWord).length;
    console.log(count);
    return count;
  };
  // Sample input:
  // countWordOccurrences("I love typescript", "typescript");
}
