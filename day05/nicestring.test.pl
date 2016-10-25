#!/usr/bin/perl

require "nicestring.pl";

use Test::Simple tests => 5;

ok (nicestring("ugknbfddgicrmopn") == 1, "This is string is nice");
ok (nicestring("aaa") == 1, "This is string is nice");

ok (nicestring("jchzalrnumimnmhp") == 0, "This is string is naughty");
ok (nicestring("haegwjzuvuyypxyu") == 0, "This is string is naughty");
ok (nicestring("dvszwmarrgswjxmb") == 0, "This is string is naughty");

