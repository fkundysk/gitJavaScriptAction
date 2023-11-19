const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');
const git = simpleGit.default();


async function run(){

    let pullMain = await git.pull('main');

    console.log(pullMain)
    //git.checkout('test');

    //  await git.checkout('test');

    const branch = await git.checkout('test');
    //const branch = await git.branch();

    // logs "test-branch"
    console.log(branch)



}

run();