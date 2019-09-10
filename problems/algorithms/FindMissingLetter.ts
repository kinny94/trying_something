export function findMissingLetter(array: string[]): string {
  const ALL_ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
  const INDEX = ALL_ALPHABETS.indexOf(array[0].toLowerCase());
  const SUB_STRING = ALL_ALPHABETS.substring(INDEX, INDEX + array.length);

  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== SUB_STRING[i]) {
      return array[i] === array[i].toUpperCase() ?  SUB_STRING[i].toUpperCase() : SUB_STRING[i];
    }
  }
}
