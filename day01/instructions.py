def instruct(data):
    total = len(data)
    ups = 0

    for cmd in data:
        if cmd == '(':
            ups = ups + 1

    downs = total - ups

    return ups - downs

if __name__ == '__main__':
    fin = open("input.txt")
    data = fin.read()
    floor = instruct(data)

    print "Santa needs to go to floor " + str(floor)
