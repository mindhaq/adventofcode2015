#!/usr/bin/perl

require "nicestring.pl";

use Test::Simple tests => 5;

ok (nicestring1("ugknbfddgicrmopn") == 1, "This is string is nice");
ok (nicestring1("aaa") == 1, "This is string is nice");

ok (nicestring1("jchzalrnumimnmhp") == 0, "This is string is naughty");
ok (nicestring1("haegwjzuvuyypxyu") == 0, "This is string is naughty");
ok (nicestring1("dvszwmarrgswjxmb") == 0, "This is string is naughty");

