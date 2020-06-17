names = {1:{"id":1, "name": "Blair"},
        2:{"id":2, "name": "Lauren"},
        3:{"id":3, "name": "Tia"},
        4:{"id":4, "name": "Keith"},
    }


activities = {1:{"id":1, "activity": "Works", "name_id": 2},
        2:{"id":2, "activity": "Learns", "name_id": 1},
        3:{"id":3, "activity": "Welds", "name_id": 4},
        4:{"id":4, "activity": "Sleeps", "name_id": 3},
        5:{"id":5, "activity": "Drinks", "name_id": 1},
    }

# print("names:",names)
# print("activities:",activities)

def innerjoin(one,two,match,where=None):
    outDict = {}
    for oneRow in one:
        if (where==None) or one[oneRow]['id'] == where:
            for twoRow in two:
                if one[oneRow]['id'] == two[twoRow][match]:
                    index = len(outDict) +1
                    outDict[index] = {}
                    for item in one[oneRow]:
                            # print(item,one[oneRow][item])
                            outDict[index][item] = one[oneRow][item]
                    for element in two[twoRow]:
                            # print(element,two[twoRow][element])
                            outDict[index][element] = two[twoRow][element]
    return outDict
        # dict = one[row]
        # print('dict',dict)
        # for item in dict:
        #     print(item,dict[item])

myDict = innerjoin(names, activities, 'name_id', )
print(myDict)



    # for rowOne in one:
    #     for rowTwo in two:
    #         if one[rowOne][match] == two[rowTwo][match]:
    #             if (where==None) or one[rowOne][match] == where:
    #                 index = len(outDict.keys()) + 1
    #                 outDict[index] = {}
    #                 outDict[index][match] = one[rowOne][match]
    #                 outDict[index] = dict(match.value = one[rowOne][match], name = one[rowOne]['name'], activity = two[rowTwo]['activity'])
    #                 # print(one[rowOne]['name'],two[rowTwo]['activity'])
    # return outDict 