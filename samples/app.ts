type Shade = "mint" | "violet" | "blue";

interface Aurora<T> {
  readonly value: T;
  shade: Shade;
  visible?: boolean;
}

enum Signal {
  Dawn = "✦",
  Dusk = "·",
}

export async function evoke<T extends Record<string, unknown>>(value: T): Promise<Aurora<T>> {
  const shade = (value.shade ?? "mint") as Shade;
  const signal = shade === "mint" ? Signal.Dawn : Signal.Dusk;

  return { value, shade, visible: signal === Signal.Dawn } satisfies Aurora<T>;
}
