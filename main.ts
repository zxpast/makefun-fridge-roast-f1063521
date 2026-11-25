// One Line, One Laugh: Roast Your Fridge
// Competition: u-suzy-one-line-one-laugh-roast-your-fridge-f1063521
// This program writes one roast line to /output/entry.txt.
// Node 22, standard library only. Deterministic, no network, no input.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

function roastLine(): string {
  return "My fridge's crisper drawer holds carrots I bought to impress a date who never came back \u2014 the carrots outlasted the relationship.";
}

function main(): void {
  const line = roastLine();
  const length = Array.from(line).length;
  if (length < 1 || length > 200) {
    throw new Error(`roast line must be 1-200 characters, got ${length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

main();
