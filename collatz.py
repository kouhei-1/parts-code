def collatz(n):
    while n != 1:
        print(n)
        if n % 2 == 0:
            n = n // 2
        else:
            n = 3*n + 1
    print(n)

a = input("何を収束させますか>>")
print()
collatz(int(a))
