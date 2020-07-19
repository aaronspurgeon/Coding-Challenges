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

def sockMerchant(n, ar):
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
    matches = 0

    my_dict = {}
    for i in ar:
        if len(my_dict) == 0:
            my_dict[i] = 1
        elif i not in my_dict.keys():
            my_dict[i] = 1
        else:
            my_dict[i] += 1

    for i in my_dict:
        if my_dict[i] % 2 == 0:
            pair = my_dict[i] // 2
            matches = matches + pair
        elif my_dict[i] > 2:
            odd = my_dict[i] = my_dict[i] - 1
            pair = odd // 2
            matches = matches + pair
    return matches


print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
