import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 迭代五：把停车表写成“购买九十分钟免于被拖走”的馆签；未来误读计时收费为防灾服务。
const entry = "Parking meter, c. 2020: a coin slot that sold a driver ninety minutes of not being towed.";

const text = entry.trim();
if (!text) throw new Error("entry must be non-empty");
if (/[\r\n\u0000-\u001f\u007f]/u.test(text)) throw new Error("entry must be a single clean line");
if ([...text].length < 1 || [...text].length > 200) throw new Error("entry must be 1-200 characters");

const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = resolve(configured && configured.length > 0 ? configured : "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, { encoding: "utf8", mode: 0o644 });
