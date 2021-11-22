const { exec, spawn } = require('child_process');
exec('git init', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);

     if (!err && stdout && !stdout.match('.git')) {
       console.log("=========")
        } else {
          console.error(['free publish',"请先 git remote" ]);
        //   process.exit();
        }
});
