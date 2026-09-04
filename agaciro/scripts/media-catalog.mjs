import { readFile } from "node:fs/promises";
import ts from "typescript";

// Load the standalone content module on every supported Node version without a TS runner.
export async function loadCatalog() {
  const source = await readFile(new URL("../src/content/media.ts", import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}
