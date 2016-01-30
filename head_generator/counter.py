import json
import sys
countDict = {"me":0, "my":0, "i":0, "mine":0, "myself":0,
             "she":0, "her":0, "hers":0, "herself":0,
             "he":0, "him":0, "his":0, "himself":0,
             "they":0, "them":0, "their":0, "themselves":0,
             "we":0, "us":0, "our":0, "ours":0, "ourselves":0,
             "you":0, "your":0, "yours":0, "yourself":0, "y'all":0}
lyricfile = sys.stdin.readline()
words = lyricfile.split()
for word in words:
    if "'" in word:
        word = word[:word.index("'")]
    if word in countDict:
        countDict[word] = countDict[word] + 1
        
first_person = countDict["me"] + countDict["my"] + countDict["i"] + countDict["mine"] + countDict["myself"]
first_person_plural = countDict["we"] + countDict["us"] + countDict["our"] + countDict["ours"] + countDict["ourselves"]
second_person = countDict["you"] + countDict["your"] + countDict["yours"] + countDict["yourself"] + countDict["y'all"]
third_person_f = countDict["she"] + countDict["her"] + countDict["hers"] + countDict["herself"]
third_person_m = countDict["he"] + countDict["him"] + countDict["his"] + countDict["himself"]
third_person_plural = countDict["they"] + countDict["them"] + countDict["their"] + countDict["themselves"]

print(json.dumps(countDict))


print("first person singular: ", first_person)
print("first person plural: ", first_person_plural)
print("second person: ", second_person)
print("third person feminine: ", third_person_f)
print("third person masculine: ", third_person_m)
print("third person plural: ", third_person_plural)