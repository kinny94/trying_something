export class TwoToOne {
    public static longest = (s1: string, s2: string) => {
      const JOINED_STRINGS = s1.concat(s2);
      const newString = new Set(JOINED_STRINGS.split(''));
      return Array.from(newString).sort().join('');
    }
}
