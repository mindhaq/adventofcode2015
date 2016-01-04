import unittest
import instructions


class InstructionsTest(unittest.TestCase):
    def test_examples_with_result_zero(self):
        self.assertIs(0, instructions.instruct("(())"))
        self.assertIs(0, instructions.instruct("()()"))

    def test_examples_with_result_three(self):
        self.assertIs(3, instructions.instruct("((("))
        self.assertIs(3, instructions.instruct("(()(()("))


if __name__ == '__main__':
    unittest.main()
