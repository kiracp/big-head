f = open("output.txt", "r")
var data = JSON.parse(f.read());
console.log(data);



var freqData=[
{Person:'First Singular',part:{subj:13, obj:1, det:2, possp:3, rfx:5}}
,{Person:'First Plural',part:{subj:2, obj:3, det:22, possp:1, rfx:0}}
,{Person:'Second Singular',part:{subj:10, obj:8, det:6, possp:3, rfx:2}}
,{Person:'Second Plural',part:{subj:8, obj:1, det:2, possp:3, rfx:5}}
,{Person:'Third Singular',part:{subj:4, obj:0, det:3, possp:0, rfx:5}}
,{Person:'Third Plural',part:{subj:9, obj:3, det:5, possp:12, rfx:5}}
];

console.log(freqData);

//dashboard('#dashboard',freqData);

/*
1s: 
subj: I
obj: me
det: my
possp: mine
rfx: myself

1p
subj: we
obj: us
det: our
possp: ours
rfx: ourselves

2s
subj: you
obj: you
det: your
possp: yours
rfx: yourself

2p
subj: you
obj: you
det: your
possp: yours
rfx: yourselves

3s_h
subj: he she
obj: him her
det: his her
possp: his hers
rfx: himself herself


3p
subj: they
obj: them
det: their
possp: theirs
rfx: themselves
*/