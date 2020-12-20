import { cloneRepo } from "../utils";
import * as shell from "shelljs";
import * as path from "path";
import templateRepo from "../config/template-repo";
const cwd = process.cwd();
export default function serverPrompt(name: string) {
  shell.cd(cwd);
  cloneRepo(templateRepo.koa2, path.resolve(cwd, name));
}
