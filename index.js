const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');
const git = simpleGit.default();


async function run(){

    let pullMain = await git.pull('main');
    console.log(pullMain);

    let branchAll = await git.branch();
    console.log(branchAll);

    const checkoutBranch = await git.checkout('tempTest');
    //const checkoutBranch = await git.branch.checkoutBranch('testTemp');
    console.log(checkoutBranch);

    const currentBranch = await git.branch();
    console.log(currentBranch.current);


/*
    let statusMain = await git.status();
    console.log(statusMain);

    const logMain = await git.log('--oneline');
    console.log(logMain);
*/

    //const branch = await git.branch('--all');
    //console.log(branch);
    //git.checkout('test');

    //  await git.checkout('test');

  //  const branch = await git.checkout('test');
    //const branch = await git.branch();

    // logs "test-branch"
    //console.log(branch)



}

run();