import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 终稿：停车收费表在 3000 年被误读为“出售九十分钟免于被拖走”的装置。
// 文案在后续复核中保持不变；此次改动只重构运行与校验流程。
const entry = "Parking meter, c. 2020: a coin slot that sold a driver ninety minutes of not being towed.";

// Node 22 原生支持 TypeScript 类型标注；严格 UTF-8 写出，不依赖系统区域设置。
const UTF8: BufferEncoding = "utf8";

function validateEntry(raw: string): string {
  // trim 仅用于去除编辑时误带的首尾空白；落盘文本始终是规范化后的单行馆签。
  const text = raw.trim();
  if (!text) throw new Error("entry must be non-empty");
  if (/[\r\n\u0000-\u001f\u007f]/u.test(text)) throw new Error("entry must be a single clean line");
  const length = [...text].length;
  if (length < 1 || length > 200) throw new Error("entry must be 1-200 characters");
  return text;
}

function resolveOutputDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return resolve(configured && configured.length > 0 ? configured : "/output");
}

const text = validateEntry(entry);
const outputDir = resolveOutputDir();
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, { encoding: UTF8, mode: 0o644 });
