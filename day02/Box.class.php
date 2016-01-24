<?php

class Box {

    private $length;
    private $width;
    private $height;

    private $face1;
    private $face2;
    private $face3;

    public function __construct($length, $width, $height) {
        $this->length = $length;
        $this->width = $width;
        $this->height = $height;

        $this->face1 = $length * $width;
        $this->face2 = $length * $height;
        $this->face3 = $width * $height;
    }

    public function getSmallestFace() {
        return min($this->face1, $this->face2, $this->face3);
    }

    public function getRequiredPaper() {
        return 2 * $this->face1 +
               2 * $this->face2 +
               2 * $this->face3 +
               $this->getSmallestFace();
    }

}

