import * as ora from "ora";
import clone from "download-git-repo";
import * as shell from "shelljs";
import * as path from "path";
import templateRepo from "../config/template-repo";
const cwd = process.cwd();
export default function serverPrompt(name: string) {
  shell.cd(cwd);
  clone(templateRepo.koa2, path.resolve(cwd, name), (err) => {
    console.error(err);
  });
}
