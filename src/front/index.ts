import * as inquirer from "inquirer";
const prompt = inquirer.createPromptModule();
import { cloneRepo } from "../utils";
import * as path from "path";
import templateRepo from "../config/template-repo";

/**
 * 前端框架处理
 */
export default function frontPrompt(name: string) {
  prompt([
    {
      type: "list",
      name: "framework",
      message: "请选择技术栈:",
      choices: ["React", "Vue"],
    },
  ]).then(({ framework }) => {
    console.log("你选择的框架是:", framework);

    switch (framework) {
      case "React":
        cloneRepo(templateRepo.react17, path.resolve(process.cwd(), name));
        break;
      case "Vue":
        console.error("暂无模板, 请重新选择");
        break;
    }
  });
}
