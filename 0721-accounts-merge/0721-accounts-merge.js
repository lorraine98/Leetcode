/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// var accountsMerge = function (accounts) {
//     const accountArr = [];

//     const registerAccount = (name, emails) => {
//         const emailSet = new Set();
//         for (const email of emails) {
//             emailSet.add(email);
//         }
//         accountArr.push({name : emailSet});
//     }

//     const addEmails = (stringSet, emails) => {
//         for(const email of emails) {
//             stringSet.add(email);
//         }
//     }

//     for (const account of accounts) {
//         const [name, ...emails] = account;
//         const emailSetByName = accountMap.get(name);
//         if (emailSetByName) {
//             for (const email of emails) {
//                 if (emailSetByName.has(email)) {
//                     addEmails(emailSetByName, emails);
//                     continue;
//                  }
//             }
//         }

//         registerAccount(name, emails);
//     }
//     console.log(accountMap)
// };

var accountsMerge = function (accounts) {
    const parents = {};
    const email2name = {};

    const find = (x) => {
        if (parents[x] !== x) {
            parents[x] = find(parents[x]);
        }

        return parents[x];
    };

    const union = (x, y) => {
        parents[find(x)] = find(y);
    };

    for (const [name, ...emails] of accounts) {
        for (const email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name;
            union(email, emails[0]);
        }
    }

    const emails = {};
    for (const email of Object.keys(parents)) {
        const parent = find(email);
        if (parent in emails) {
            emails[parent].push(email);
        } else {
            emails[parent] = [email];
        }
    }
    console.log(emails)

    return Object.entries(emails).map(([email, x]) => [email2name[email], ...x.sort()]);
};