# binary search
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        middle = (low+high) / 2
        if target < arr[middle]:
            high = middle-1
        elif target > arr[middle]:
            low = middle + 1
        else:
            return middle
    return -1


def findThreeLargestNumbers(array):
    # Write your code here.
    # iterate through the input array for the highest nums
    # return the array with the 3 highest
    high_nums = []
    first = None
    second = None
    third = None

    for i in array:
        if third == None:
            third = i
        elif second == None:
            second = i
        elif first == None:
            first = i
        elif i > third:
            third = i
        elif i > second:
            second = i
        elif i > first:
            first = i
    high_nums.append(first)
    high_nums.append(second)
    high_nums.append(third)
    high_nums.sort()
    return high_nums


def isPalindrome(string):
    # Write your code here.
    str_array = []
    for i in string:
        str_array.append(i)
    reversed_str = str_array[::-1]

    new_string = ''.join(reversed_str)
    if new_string == string:
        return True
    else:
        return False


# find the media of two sorted arrays
def median_arr(arr1, arr2):
    middle1 = len(arr1) // 2
    middle2 = len(arr2) // 2
    median = (arr1[middle1] + arr2[middle2]) / 2
    return float(median)


print(median_arr([1, 3, 5], [2, 4, 6]))
