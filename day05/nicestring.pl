sub nicestring1 {
    $s = shift;

    $b1 = $s =~ /(.*[aeiou]){3,}/;
#    print "$s matches pattern1: $b1\n";

    $b2 = $s =~ /(.)\1/;
#    print "$s matches pattern2: $b2\n";

    $b3 = $s =~ /(ab|cd|pq|xy)/;
#    print "$s matches pattern3: $b3\n";

    return $b1 && $b2 && !$b3;
}

sub nicestring2 {
    $s = shift;

    $b1 = $s =~ /(.)(.).*\1\2/;
#    print "$s matches pattern1: $b1\n";

    $b2 = $s =~ /(.).(\1)/;
#    print "$s matches pattern1: $b2\n";

    return $b1 && $b2;
}

1;
