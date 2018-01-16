# Modulo256ChecksumGenerator
Repository to generate Modulo 256 checksums.

Here's some code to test the checksum generator:

```javascript
var msgs = [];
 
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161600' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '1'}); // should result in ascii [c1]=2 and [c2]=1
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161524' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '6'}); // should result in ascii [c1]=2 and [c2]=6
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161412' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '2'}); // should result in ascii [c1]=2 and [c2]=2
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161300' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'E'}); // should result in ascii [c1]=1 and [c2]=E
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161224' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '3'}); // should result in ascii [c1]=2 and [c2]=3
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161148' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '8'}); // should result in ascii [c1]=2 and [c2]=8
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161112' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'F'}); // should result in ascii [c1]=1 and [c2]=F
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028161036' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '4'}); // should result in ascii [c1]=2 and [c2]=4
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028140331' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'F'}); // should result in ascii [c1]=1 and [c2]=F
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028140255' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '4'}); // should result in ascii [c1]=2 and [c2]=4
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028131152' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '0'}); // should result in ascii [c1]=2 and [c2]=0
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028131116' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '0'}); // should result in ascii [c1]=2 and [c2]=0
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028131040' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'C'}); // should result in ascii [c1]=1 and [c2]=C
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028131004' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'C'}); // should result in ascii [c1]=1 and [c2]=C
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161028130928' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: 'A'}); // should result in ascii [c1]=2 and [c2]=A
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161024120959' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '9'}); // should result in ascii [c1]=2 and [c2]=9
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161024120923' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '0'}); // should result in ascii [c1]=2 and [c2]=0
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161024120847' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '5'}); // should result in ascii [c1]=2 and [c2]=5
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161024120811' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '1', c2: 'C'}); // should result in ascii [c1]=1 and [c2]=C
msgs.push({str: '1H|\\^&|||ACCESS^511550|||||LIS||P|1|20161024120735' + String.fromCharCode(13)+ String.fromCharCode(3), c1: '2', c2: '1'}); // should result in ascii [c1]=2 and [c2]=1
 

for(var i = 0; i < msgs.length; i++) {
    var msg = msgs[i];
    console.log('');
    console.log(msg.str);
    var checksum = calcChecksum(msg.str);
    console.log('checksum: ' + checksum + ' expected checksum: ' + msg.c1 + msg.c2);
}
```
