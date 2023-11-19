const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');
const git = simpleGit.default();


async function run(){

    //git.pull('origin', 'main', { '--no-rebase': null });
    //git.checkout('test');

  //  await git.checkout('test');

  await git.checkout('test');
  const branch = await git.branch();

  // logs "test-branch"
  console.log(branch)



}

run();