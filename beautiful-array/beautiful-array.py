class Solution:
    def beautifulArray(self, n: int) -> List[int]:
        arr = [1]
        while len(arr) < n: 
            arr = [2*x-1 for x in arr] + [2*x for x in arr]
        return [x for x in arr if x <= n]