import unittest
import instructions


class InstructionsTest(unittest.TestCase):
    def test_examples_with_result_zero(self):
        self.assertIs(0, instructions.instruct("(())"))
        self.assertIs(0, instructions.instruct("()()"))

    def test_examples_with_result_three(self):
        self.assertIs(3, instructions.instruct("((("))
        self.assertIs(3, instructions.instruct("(()(()("))
        self.assertIs(3, instructions.instruct("))((((("))

    def test_examples_with_result_minus1(self):
        self.assertIs(-1, instructions.instruct("())"))
        self.assertIs(-1, instructions.instruct("))("))

    def test_examples_with_result_minus3(self):
        self.assertIs(-3, instructions.instruct(")))"))
        self.assertIs(-3, instructions.instruct(")())())"))


if __name__ == '__main__':
    unittest.main()
