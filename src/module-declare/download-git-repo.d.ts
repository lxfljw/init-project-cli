declare module "download-git-repo" {
  export default function download(
    url: string,
    dir: string,
    cb: (err: Error) => void
  ): void;
}

// declare module "download-git-repo" {
//   export interface Url {
//     protocol?: string;
//     hostname?: string;
//     pathname?: string;
//   }

//   export function parse(
//     urlStr: string,
//     parseQueryString?,
//     slashesDenoteHost?
//   ): Url;
// }
