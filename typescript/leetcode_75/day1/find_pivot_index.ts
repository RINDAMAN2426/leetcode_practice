function pivotIndex(nums: number[]): number {
  let right = nums.reduce((acc, curr) => (acc += curr));
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    left += nums[i - 1] || 0;
    right -= nums[i];
    if (left === right) {
      return i;
    }
  }

  return -1;
}

describe('Find pivot index', () => {
  it('', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    expect(pivotIndex([1, 2, 3])).toBe(-1);
    expect(pivotIndex([2, 1, -1])).toBe(0);
  });
});
