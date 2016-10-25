#!/usr/bin/perl

require "nicestring.pl";

my $puzzleinput = "input.txt";
my $handle = undef;
my $count = 0;

open($handle, $puzzleinput)
    || die "$0: can't open $filename for reading: $!";

while (<$handle>) {
    if (nicestring1($_)) {
        $count++;
    }
}

print "$count nice strings for specification 1.";

