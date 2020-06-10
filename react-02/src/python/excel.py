from openpyxl import load_workbook

# Declare workbook object
wb_obj = load_workbook('excel.xlsx')
# Get sheetnames from workbook
sheetnames = wb_obj.sheetnames

# for a in sheetnames: # Loop through sheets
#     print('Sheetname:',a) # Print the sheetname
#     ws_obj = wb_obj[a] # Load active sheet
#     max_row = ws_obj.max_row # Max rows
#     max_col = ws_obj.max_column # Max columns
#     for b in range(1, max_col + 1):
#         cell_obj = ws_obj.cell(row = 1, column = b )
#         print(cell_obj.value)
#         for c in range(2, max_row +1):
#             cell_obj = ws_obj.cell(row = c, column = 1)
#             print(cell_obj.value)

wb_obj.active = 0
ws_obj = wb_obj.active            
# print(ws_obj)

custDict = {}
max_row = ws_obj.max_row
# print('max_row:',max_row)

nameVar = (ws_obj[1][1].value)

for i in range(2,max_row+1):
    rowPair = {}
    rowPair[nameVar] = ws_obj[i][1].value
    custDict[ws_obj[i][0].value] = rowPair
    # print(rowPair)
    # print(ws_obj[i][0].value,nameVar,ws_obj[i][1].value)
print(custDict[1]['Name'])
# {
#   "1":{"Name":"Blair"},
#   "2":{"Name":"Greg"},
#   "3":{"Name":"Larry"},
#   "4":{"Name":"Roman"},
# }
def test_cust():
    testName = custDict[2]['Name']
    assert(testName)=='Greg'


# custDict = {}
# max_col = ws_obj.max_column
# print('max_column:',max_col)
# for row in ws_obj.values:
#     for x in range(0,max_col):
#         for value in row:
#             print(value)



