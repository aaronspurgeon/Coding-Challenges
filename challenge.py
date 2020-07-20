# # binary search
# def binary_search(arr, target):
#     low = 0
#     high = len(arr) - 1
#     while low <= high:
#         middle = (low+high) / 2
#         if target < arr[middle]:
#             high = middle-1
#         elif target > arr[middle]:
#             low = middle + 1
#         else:
#             return middle
#     return -1


# def findThreeLargestNumbers(array):
#     # Write your code here.
#     # iterate through the input array for the highest nums
#     # return the array with the 3 highest
#     high_nums = []
#     first = None
#     second = None
#     third = None

#     for i in array:
#         if third == None:
#             third = i
#         elif second == None:
#             second = i
#         elif first == None:
#             first = i
#         elif i > third:
#             third = i
#         elif i > second:
#             second = i
#         elif i > first:
#             first = i
#     high_nums.append(first)
#     high_nums.append(second)
#     high_nums.append(third)
#     high_nums.sort()
#     return high_nums


# def isPalindrome(string):
#     # Write your code here.
#     str_array = []
#     for i in string:
#         str_array.append(i)
#     reversed_str = str_array[::-1]

#     new_string = ''.join(reversed_str)
#     if new_string == string:
#         return True
#     else:
#         return False


# # find the media of two sorted arrays
# def median_arr(arr1, arr2):
#     middle1 = len(arr1) // 2
#     middle2 = len(arr2) // 2
#     median = (arr1[middle1] + arr2[middle2]) / 2
#     return float(median)


# # ● Question : Given a boolean matrix, update it so that if any cell is true, all the cells
# # in that row and column are true.
# boolean_matrix = [
#     [True, False, False],
#     [False, False, False],
#     [False, False, False]
# ]


# ÷#     for i in bool_list:
# #         i == True
# #     print(bool_list)


# # def boolean_func(bool_list):
# #     for i in bool_list:
# #         for j in range(len(i) - 1):
# #             if j == True:
# #                 bool_helper(i)
# #     return bool_list


# # print(boolean_func(boolean_matrix))

# def sockMerchant(n, ar):
# possible_pairs = 0
# trying a brute force solution that has nested for loops
#  my_dict = {}
# for i in arr:
#     if len(my_dict) == 0:
#         my_dict[i] = 1
#     elif i not in my_dict.keys():
#         my_dict[i] = 1
#     else:
#         my_dict[i] += 1
# for i in my_dict:
#     if my_dict[i] == 1:
#         return i
# matches = 0

# my_dict = {}
# for i in ar:
#     if len(my_dict) == 0:
#         my_dict[i] = 1
#     elif i not in my_dict.keys():
#         my_dict[i] = 1
#     else:
#         my_dict[i] += 1

# for i in my_dict:
#     if my_dict[i] % 2 == 0:
#         pair = my_dict[i] // 2
#         matches = matches + pair
#     elif my_dict[i] > 2:
#         odd = my_dict[i] = my_dict[i] - 1
#         pair = odd // 2
#         matches = matches + pair
# return matches


# print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))


# def countingValleys(n, s):
#     # we can assume sea level is 0
#     level_track = 0

#     num_valley = 0
#    # need to make a base case of keeping track of everytime we get back to 0
#     for i in s:
#         if i == 'D':
#             if level_track == 0:
#                 level_track = level_track - 1
#                 num_valley = num_valley + 1
#             else:
#                 level_track = level_track - 1
#         elif i == 'U':
#             level_track = level_track + 1

#     return num_valley


# print(countingValleys(12, 'DDUUDDUDUUUD'))

# def jumpingOnClouds(c):
#     jumps = 0
#     current = 0

#     while current <= len(c) - 2:

#         if current + 1 == len(c) - 1:
#             jumps = jumps + 1
#             current = current + 1
#         elif c[current + 2] == 0:
#             current = current + 2
#             jumps = jumps + 1
#             print(c[current])
#         elif c[current + 2] == 1:
#             current = current + 1
#             jumps = jumps + 1
#             print(c[current])

#     return jumps


# print(jumpingOnClouds([0, 0, 0, 1, 0, 0]))

def repeatedString(s, n):
    repeat_str = [0] * (n + 1)
    for i in range(n):
        if i > len(s):
            ind = i - (len(s) - 1) - 1
            if ind > len(s) - 1:
                ind = 0
                repeat_str[i] = s[ind]
            else:
                repeat_str[i] = s[ind]
            # print(ind)
        else:
            repeat_str[i] = s[i]
    print(repeat_str)


repeatedString('asda', 10)
# abcacabcac
