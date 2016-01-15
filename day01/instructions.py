class Instructions:
    def __init__(self, data):
        level = 0
        steps = 0
        while steps < len(data):
            cmd = data[steps]
            steps += 1

            if cmd == '(':
                level += 1
            elif cmd == ')':
                level -= 1

            if level == - 1 and not hasattr(self, "firstCellar"):
                self.firstCellar = steps

        self.finalFloor = level


if __name__ == '__main__':
    fin = open("input.txt")
    data = fin.read()
    instructions = Instructions(data)
    floor = instructions.finalFloor
    firstCellar = instructions.firstCellar

    print "Santa needs to go to floor " + str(floor)
    print "He gets to the cellar for the first time at step " + str(firstCellar)
