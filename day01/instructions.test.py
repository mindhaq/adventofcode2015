import unittest
import instructions


class InstructionsTest(unittest.TestCase):
    def test_examples_with_result_zero(self):
        self.assertEqual(0, instructions.Instructions("(())").finalFloor)
        self.assertEqual(0, instructions.Instructions("()()").finalFloor)

    def test_examples_with_result_three(self):
        self.assertEqual(3, instructions.Instructions("(((").finalFloor)
        self.assertEqual(3, instructions.Instructions("(()(()(").finalFloor)
        self.assertEqual(3, instructions.Instructions("))(((((").finalFloor)

    def test_examples_with_result_minus1(self):
        self.assertEqual(-1, instructions.Instructions("())").finalFloor)
        self.assertEqual(-1, instructions.Instructions("))(").finalFloor)

    def test_examples_with_result_minus3(self):
        self.assertEqual(-3, instructions.Instructions(")))").finalFloor)
        self.assertEqual(-3, instructions.Instructions(")())())").finalFloor)

    def test_stepstocellar(self):
        self.assertEqual(1, instructions.Instructions(")").firstCellar)
        self.assertEqual(5, instructions.Instructions("()())").firstCellar)

    # added after successful run to make refactoring more secure
    def test_expected_results(self):
        fin = open("input.txt")
        fullInstructions = instructions.Instructions(fin.read())

        self.assertEqual(74, fullInstructions.finalFloor)
        self.assertEqual(1795, fullInstructions.firstCellar)


if __name__ == '__main__':
    unittest.main()
