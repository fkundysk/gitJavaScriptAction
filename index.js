const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');
simpleGit().clean(simpleGit.CleanOptions.FORCE);


import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

try {
  
  await simpleGit.pull('origin', 'master', { '--no-rebase': null });
//  await git.checkout('test');

} catch (error) {
  console.log(error.message);
}
