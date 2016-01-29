<?php

include_once "Box.class.php";

class BoxTest extends PHPUnit_Framework_TestCase {

    public function testSmallesFace() {
        $box = new Box(1, 2, 3);

        $this->assertEquals(2, $box->getSmallestFace());
    }

    public function testGetVolume() {
        $box = new Box(1, 2, 3);

        $this->assertEquals(6, $box->getVolume());
    }

    public function testShortestPerimeter() {
        $box = new Box(1, 2, 3);

        $this->assertEquals(6, $box->getShortestPerimeter());
    }

    public function testPaperExample1() {
        $box = new Box(2, 3, 4);

        $this->assertEquals(58, $box->getRequiredPaper());
    }

    public function testPaperExample2() {
        $box = new Box(1, 1, 10);

        $this->assertEquals(43, $box->getRequiredPaper());
    }

    public function testRibbonExample1() {
        $box = new Box(2, 3, 4);

        $this->assertEquals(34, $box->getRequiredRibbon());
    }

    public function testRibbonExample2() {
        $box = new Box(1, 1, 10);

        $this->assertEquals(14, $box->getRequiredRibbon());
    }

}
