def taxes(earnings):
    brackets = [0,0,0,0,0]
    taxLevels = (214368,150473,97069,48535,0)
    taxRates = (.33,.29,.26,.205,.15)
    taxes = 0
    index = 0
    for x in brackets:
        if (earnings>taxLevels[index]):
            brackets[index] = earnings - taxLevels[index];
            earnings = taxLevels[index]
            taxes = taxes+brackets[index]*taxRates[index]
        index=index+1
        
    return round(taxes,2)