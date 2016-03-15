#!/bin/sh

[ $# -lt 2 ] && { echo "Usage: $0 key zeroes"; exit 1; }

zeroes=`seq -f '0' -s '' $2`

while [[ ${coin:0:$2} != $zeroes ]]; do
    i=$((++i))
    coin=`md5 -qs $1$i`

    if [[ $((i % 10000)) == 0 ]]; then
        echo digging $1$i: $coin
    fi
done

echo found coin $coin: $i
