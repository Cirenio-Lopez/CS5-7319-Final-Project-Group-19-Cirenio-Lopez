const yargs = require("yargs");

const parseArguments = () => {
  const argv = yargs
    .option("domain", {
      alias: "d",
      description: "The domain to scan",
      type: "string",
      demandOption: true,
    })
    .help()
    .alias("help", "h").argv;

  return argv.domain;
};

module.exports = parseArguments;
