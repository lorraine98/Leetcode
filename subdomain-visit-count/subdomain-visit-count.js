var subdomainVisits = function(cpdomains) {
    const hash = new Map();
    cpdomains.forEach(domain => {
        const [cp, name] = domain.split(' ');
        const visitCnt = parseInt(cp);
        addVisitCnt(name, visitCnt, hash)
        for(let i=0; i<name.length; i++) {
            if(name[i] === '.') {
                const str = name.slice(i+1);
                addVisitCnt(str, visitCnt, hash)
            }
        }
    });
    let res = [];
    hash.forEach((key, value) => {
        res.push(`${key}`+ " " + `${value}`);
    });
    return res;
};

function addVisitCnt(str, visitCnt, hash) {
    if(hash.has(str)) {
        hash.set(str, hash.get(str) + visitCnt);
    }
    else {
        hash.set(str, visitCnt);
    }
}