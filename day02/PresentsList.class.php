<?php

include "Box.class.php";

class PresentsList {

    private $requiredPaper = 0;

    private $requiredRibbon = 0;

    public static function createBoxFrom($line) {
        $dimensions = explode("x", $line);
        return new Box($dimensions[0], $dimensions[1], $dimensions[2]);
    }

    public function addBox($box) {
        $this->requiredPaper += $box->getRequiredPaper();
        $this->requiredRibbon += $box->getRequiredRibbon();
    }

    public function getRequiredPaper() {
        return $this->requiredPaper;
    }

    public function getRequiredRibbon() {
        return $this->requiredRibbon;
    }

    public function addListFrom($filename) {
        $presents = file($filename);
        foreach ($presents as $line) {
            $box = PresentsList::createBoxFrom($line);
            $this->addBox($box);
        }
    }
}
