#!/bin/sh

while [[ ${coin:0:5} != "00000" ]]; do
    i=$((++i))
    coin=`md5 -qs $1$i`

    if [[ $((i % 1000)) == 0 ]]; then
        echo digging $1$i: $coin
    fi
done

echo found coin $coin: $i
