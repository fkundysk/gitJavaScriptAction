const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');


try {
  
  simpleGit.pull('origin', 'master', { '--no-rebase': null });
//  await git.checkout('test');

} catch (error) {
  console.log(error.message);
}
