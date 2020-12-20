import * as inquirer from "inquirer";
const prompt = inquirer.createPromptModule();

/**
 * 前端框架处理
 */
export default function frontPrompt() {
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
        break;
      case "Vue":
        break;
    }
  });
}
