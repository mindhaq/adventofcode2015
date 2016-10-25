#!/usr/bin/perl

require "nicestring.pl";

use Test::Simple tests => 10;

ok (nicestring1("ugknbfddgicrmopn") == 1, "This is string is nice");
ok (nicestring1("aaa") == 1, "This is string is nice");
ok (nicestring1("jchzalrnumimnmhp") == 0, "This is string is naughty");
ok (nicestring1("haegwjzuvuyypxyu") == 0, "This is string is naughty");
ok (nicestring1("dvszwmarrgswjxmb") == 0, "This is string is naughty");

ok (nicestring2("qjhvhtzxzqqjkmpb") == 1, "This is string is nice");
ok (nicestring2("xxyxx") == 1, "This is string is nice");
ok (nicestring2("uurcxstgmygtbstg") == 0, "This is string is naughty");
ok (nicestring2("ieodomkazucvgmuy") == 0, "This is string is naughty");
ok (nicestring2("aaa") == 0, "This is string is naughty");
