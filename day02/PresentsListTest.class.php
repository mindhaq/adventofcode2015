<?php

include "PresentsList.class.php";

class PresentsListTest extends PHPUnit_Framework_TestCase {

    public function testParsesLineCorrectly() {
        $box = PresentsList::createBoxFrom("1x2x3");

        $this->assertEquals(2, $box->getSmallestFace());
        $this->assertEquals(24, $box->getRequiredPaper());
    }

    public function testReadPuzzleInput() {
        $presentsList = new PresentsList();

        $presentsList->addListFrom("input.txt");

        $this->assertEquals(1588178, $presentsList->getRequiredPaper());
    }
}
