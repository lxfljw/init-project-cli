#!/usr/bin/env node
import { program } from "commander";
import * as shell from "shelljs";
import * as path from "path";
import * as inquirer from "inquirer";
import frontPrompt from "./front";
import serverPrompt from "./server";
const prompt = inquirer.createPromptModule();
program.version(require("../package.json").version);
program.name("init-project").usage("[options] command");

/** 初始化项目 */
program
  .command("init <name>")
  .description("init project")
  .action((name, options) => {
    prompt([
      {
        type: "list",
        name: "frameworkType",
        message: "前端框架or后端框架?",
        choices: ["前端", "后端(koa2)"],
      },
    ]).then(({ frameworkType }) => {
      console.log("你的选择是:", frameworkType);
      if (frameworkType === "前端") {
        frontPrompt();
      } else if (frameworkType === "后端(koa2)") {
        serverPrompt(name);
      }
    });
    // shell.mkdir(path.resolve(cwd, name));
    // shell.cd(name);
  });

// process 进程 argv执行参数
program.parse(process.argv);
