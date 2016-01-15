import unittest
import instructions


class InstructionsTest(unittest.TestCase):
    def test_examples_with_result_zero(self):
        self.assertIs(0, instructions.Instructions("(())").finalFloor)
        self.assertIs(0, instructions.Instructions("()()").finalFloor)

    def test_examples_with_result_three(self):
        self.assertIs(3, instructions.Instructions("(((").finalFloor)
        self.assertIs(3, instructions.Instructions("(()(()(").finalFloor)
        self.assertIs(3, instructions.Instructions("))(((((").finalFloor)

    def test_examples_with_result_minus1(self):
        self.assertIs(-1, instructions.Instructions("())").finalFloor)
        self.assertIs(-1, instructions.Instructions("))(").finalFloor)

    def test_examples_with_result_minus3(self):
        self.assertIs(-3, instructions.Instructions(")))").finalFloor)
        self.assertIs(-3, instructions.Instructions(")())())").finalFloor)

    def test_stepstocellar(self):
        self.assertIs(1, instructions.Instructions(")").firstCellar)
        self.assertIs(5, instructions.Instructions("()())").firstCellar)


if __name__ == '__main__':
    unittest.main()
