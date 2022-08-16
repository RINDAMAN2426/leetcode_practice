function isSubsequence(target: string, origin: string): boolean {
  const targetArr = target.split('');
  let originArr = origin.split('');
  let prevSearchedIndex = 0;

  for (let i = 0; i < targetArr.length; i++) {
    const searchedIndex = originArr.findIndex(
      (originChar) => originChar === targetArr[i]
    );

    if (searchedIndex === -1) {
      return false;
    }

    originArr = originArr.slice(searchedIndex + 1);
    prevSearchedIndex = searchedIndex;
  }

  return true;
}

describe('isSubSequence', function () {
  it('', function () {
    expect(isSubsequence('b', 'ac')).toBe(false);
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
    expect(isSubsequence('ace', 'abcde')).toBe(true);
    expect(isSubsequence('aec', 'abcde')).toBe(false);
    expect(isSubsequence('aaaaaa', 'bbaaaa')).toBe(false);
    expect(isSubsequence('ab', 'baab')).toBe(true);
    expect(
      isSubsequence(
        'twn',
        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxtxxxxxxxxxxxxxxxxxxxxwxxxxxxxxxxxxxxxxxxxxxxxxxn'
      )
    ).toBe(true);
  });
});
