from openpyxl import load_workbook

def breakIntoDict():
    wb = load_workbook('excel.xlsx')
    builtDict = {}
    for sheet in wb.sheetnames:
        builtDict[sheet] = {}
        rowCount = 1
        for row in wb[sheet].iter_rows(min_row=2,min_col=1):
            if row[0].value is not None:
                col = 0
                builtDict[sheet][rowCount] = {}
                for cell in row:
                    builtDict[sheet][rowCount][wb[sheet][1][col].value] = cell.value
                    col += 1
            rowCount += 1
    # print(builtDict)
    return builtDict
xlDict = breakIntoDict()

# This block of code creates a list of existing invoice
# number to display to the user
invoices = xlDict['invoices']
invoiceList = []
for invoice in invoices:
    invoiceList.append(invoices[invoice]['Invoice'])
print(invoiceList)

# This code gets a valid invoice number from the user
invoiceReq = 0
while invoiceReq not in invoiceList:
    invoiceReq = int(input('Enter existing invoice:'))

# Invoice requires:
# Invoice number (from invoice dictionary)
# customer ID (from invoice dictionary)
# customer name (from customers dictionary)
# product ID (from invoice_line_items)
# product qty (from invoice_line_items)
# product name (from product dictionary)
# unit price (from product dictionary)
# total price (calculated)
