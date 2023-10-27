# a:1 b:1 c:0 || a:1 b:1 c:2 || a:2 b:1 c:2 || a:2 b:1 c:3 || a:3 b:1 c
a = 1
b = 1
c = 0
for num in range(50):
  c = a + b
  a = b
  b = c
  print(a)
