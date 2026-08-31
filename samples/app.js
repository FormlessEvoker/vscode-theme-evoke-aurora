/** A JavaScript sample for imports, JSDoc, classes, regex, and templates. */
import { readFile } from "node:fs/promises";

export class Aurora {
  static shades = new Set(["mint", "violet", "blue"]);

  #visible = true;

  constructor(shade = "mint") {
    this.shade = Aurora.shades.has(shade) ? shade : "blue";
  }

  async load(path) {
    const source = await readFile(path, "utf8");
    const match = /aurora-(?<shade>\w+)/i.exec(source);
    return `${this.#visible ? "visible" : "hidden"}: ${match?.groups?.shade ?? this.shade}`;
  }
}
