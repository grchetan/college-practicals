fronted = int(input('Enter a number fronted: '))
software = int(input('Enter a number software: '))
dbms = int(input('Enter a number Data base: '))
javaScript = int(input('Enter a number javaScript: '))
coa = int(input('Enter a number COA: '))

passing = 9
fail_count = 0  # fail subjects count

if fronted >= passing:
    print("Pass in fronted")
else:
    print("fail in fronted")

if software >= passing:
    print("Pass in software")
else:
    print("fail in software")

if dbms >= passing:
    print("Pass in dbms")
else:
    print("fail in dbms")

if javaScript >= passing:
    print("Pass in javaScript")
else:
    print("fail in javaScript")

if coa >= passing:
    print("Pass in coa")
else:
    print("fail in coa")

#  if fail_count == 5:
#     print("All subjects failed")


totalMax = 100
marksobtain = fronted + software + dbms + javaScript + coa
final = (marksobtain / totalMax) * 100

print('your percentege is' , int(final),'%')