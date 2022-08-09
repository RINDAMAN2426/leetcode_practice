function isIsomorphic(s: string, t: string): boolean {
  const length = s.length;
  const dict = {};
  for (let i = 0; i < length; i++) {
    if (dict[s[i]]) {
      if (t[i] !== dict[s[i]]) {
        return false;
      }
      continue;
    }
    if (Object.values(dict).find((v) => v === t[i])) {
      return false;
    }
    dict[s[i]] = t[i];
  }
  return true;
}

describe('Isomorphic string', function () {
  it('', function () {
    expect(isIsomorphic('egg', 'add')).toBe(true);
    expect(isIsomorphic('foo', 'bar')).toBe(false);
    expect(isIsomorphic('paper', 'title')).toBe(true);
  });
});
