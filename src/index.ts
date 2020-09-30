import { IBbs } from "./interface/bbs";
import { IJs } from "./interface/js";
import { COM } from "./interface/com";

declare global {
  const js: IJs;
  const bbs: IBbs;
  const COM: COM;
}

export { js, bbs, COM };
