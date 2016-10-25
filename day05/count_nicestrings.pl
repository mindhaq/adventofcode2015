#!/usr/bin/perl

require "nicestring.pl";

my $puzzleinput = "input.txt";
my $handle = undef;
my $count1 = 0;
my $count2 = 0;

open($handle, $puzzleinput)
    || die "$0: can't open $filename for reading: $!";

while (<$handle>) {
    if (nicestring1($_)) {
        $count1++;
    }
}

print "$count1 nice strings for specification 1.\n";
print "$count2 nice strings for specification 2.\n";

