import clone from "download-git-repo";
import ora from "ora";

export function cloneRepo(repoUrl: string, dir: string) {
  const spiner = ora("正在初始化模板, 请等待...").start();
  clone(repoUrl, dir, (err: Error) => {
    if (err) {
      console.error("发生以下错误, 初始化模板失败", err);
      return;
    }
    spiner.succeed("模板初始化成功!");
    spiner.stop();
  });
}
