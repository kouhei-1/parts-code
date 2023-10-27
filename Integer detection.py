//整数検出

n = 0 #ここに代入
a = integer_detection(n)
print(a)

def integer_detection(number_one):
  rounded_number = int(number_one)
  if number_one == rounded_number:
    return(False)
  else:
    return(True)
