const core = require('@actions/core');
const github = require('@actions/github');
let exec = require('child_process').exec;
const simpleGit = require('simple-git');
simpleGit().clean(simpleGit.CleanOptions.FORCE);


import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git';

const options: Partial<SimpleGitOptions> = {
   baseDir: process.cwd(),
   binary: 'git',
   maxConcurrentProcesses: 6,
   trimmed: false,
  };

const git: SimpleGit = simpleGit(options);
try {
  
  await git.pull('origin', 'master', { '--no-rebase': null });
//  await git.checkout('test');

} catch (error) {
  console.log(error.message);
}
