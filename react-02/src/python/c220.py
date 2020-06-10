import os

def lines():    
    file1 = open('syntax.js','r')
    lines = file1.readlines()
    return len(lines)
    
def else_count():    
    file1 = open('syntax.js','r')
    lines = file1.readlines()
    count = 0
    for line in lines:
        if '} else {' in line:
            count = count + 1
    return count

def char_count():    
    file1 = open('syntax.js','r')
    lines = file1.readlines()
    count = 0
    for line in lines:
        count = count + len(line)
    return count

def list_files():
    print("os.getcwd():",os.getcwd())
    dirList = os.listdir()
    total = 0
    for x in dirList:
        print(x, os.stat(x).st_size)
        total+=os.stat(x).st_size
    print("Directory size:",total)

def census():
    count = 0
    classLoc = 0
    sectorLoc = 0
    classSector = {"CLASS":0,"SECTOR":0}
    tupleDict = {}
    classDict = {}
    sectorDict = {}
    with open("Census.csv") as infile:
        firstLine = infile.readline()
        splitLine = firstLine.split(',')
        headCount = 0
        for heading in splitLine:
            try:
                # (classSector[heading])
                classSector[heading]=headCount
            except:
                pass
            headCount+=1
        for line in infile:
            splitLine = line.split(',')
            try:
                currentCnt = classDict[splitLine[classSector['CLASS']]]
                classDict[splitLine[classSector['CLASS']]]+=1
            except KeyError as e:
                classDict[splitLine[classSector['CLASS']]]=1
            try:
                currentCnt = sectorDict[splitLine[classSector['SECTOR']]]
                sectorDict[splitLine[classSector['SECTOR']]]+=1
            except KeyError as e:
                sectorDict[splitLine[classSector['SECTOR']]]=1
            myTuple=((splitLine[classSector['CLASS']],splitLine[classSector['SECTOR']]))
            try:
                currentvalue=tupleDict[myTuple]
                tupleDict[myTuple]=int(currentvalue+splitLine[9])
            except:    
                tupleDict[myTuple]=int(splitLine[9])
            count+=1
        
        with open('report.txt','w') as report:    
            report.write('CLASS - SECTOR : RES_CNT\n')
            report.write('========================\n')
            classList = []
            for item in tupleDict:
                curClass = item[0]
                if (curClass not in classList):
                    classList.append(curClass)
            for a in classList:
                for b in tupleDict:
                    if a==b[0]:
                        report.write(b[0]+'-'+b[1]+':'+str(tupleDict[b])+'\n')
    return count;

census()



