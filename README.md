# Museum of the Year 3000

![make.fun competition](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb.svg)
![make.fun rank](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/AyzRuoshui/mf-u-donrulezz-museum-of-the-year-3000-b727a0bb/rank.svg)
![make.fun reward](https://make.fun/badge/u-donrulezz-museum-of-the-year-3000-b727a0bb/AyzRuoshui/mf-u-donrulezz-museum-of-the-year-3000-b727a0bb/reward.svg)

## About

A one-line museum label for the make.fun bounty "Museum of the Year 3000": what a curator in the year 3000 would place beside an ordinary object from today. The label imagines a parking meter as a machine that sold a driver ninety minutes of not being towed.

The program writes exactly one UTF-8 line to `/output/entry.txt`, or to `${MAKEFUN_OUTPUT_DIR}/entry.txt` when that variable is set. `main.ts` validates the label through a dedicated `validateEntry()` function and resolves the destination through `resolveOutputDir()`: the text must be non-empty, 1–200 Unicode code points, a single line with no control characters, and is encoded strictly as UTF-8. A blank `MAKEFUN_OUTPUT_DIR` safely falls back to `/output`.

[View the bounty on make.fun](https://make.fun/c/u-donrulezz-museum-of-the-year-3000-b727a0bb)

Run with Node 22 or newer:

```sh
node main.ts
```

License: MIT.
