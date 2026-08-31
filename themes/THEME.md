# Evoke Aurora design system

## Intent

Evoke Aurora is an aurora theme without an aurora-colored workbench. It uses a dry,
matte graphite night sky so vivid syntax colors feel isolated, luminous, and useful.
The theme should reward scanning a file—not decorate every token.

Its design contract is:

- Large surfaces stay neutral, dark, and visually quiet.
- Hue communicates a token's reading role; brightness communicates importance.
- Purple marks durable structure, blue marks language flow and named values, mint and
  gold mark raw data, and green marks named finite states.
- Generic punctuation recedes unless it communicates an operator or code block.
- Bright colors are scarce enough to retain their aurora effect.

## Surface hierarchy

| Layer | Color | Purpose |
|---|---:|---|
| Night Canopy | `#1F1F1F` | Editor canvas, terminal, menu, notifications |
| Polar Charcoal | `#181818` | Sidebar, panels, title/status bars, inactive tabs |
| Graphite Shelf | `#202020` | Hover cards and editor widgets |
| Slate Hollow | `#2B2B2B` | Selection, hover, borders, structural division |
| Control Stone | `#313131` | Inputs and dropdowns |
| Ridge Shadow | `#3C3C3C` | Raised-control and input edges |

The editor canvas is deliberately a little lighter than the surrounding chrome. The
eye rests on the code, while the workbench reads as a deep charcoal frame.

## Palette matrix

The matrix is the named palette. `samples/palette.css` provides the same colors as
CSS custom properties for visual comparison.

| Family | Deep / structural | Core | Light / airy |
|---|---|---|---|
| Violet | Twilight Violet `#7765B8` | Crown Violet `#9B7BFF` | Orchid Haze `#B99CFF` |
| Blue | Boreal Blue `#469AF9` | Glacier Blue `#84B5F2`, Ice Blue `#8FC0F5` | Frost Blue `#C9DFEE` |
| Green / mint | Pine Needle `#58B982` | Aurora Mint `#62FDC3` | Boreal Green `#96F1A3`, Pale Mint `#CFFFE7` |
| Pink | — | Polar Pink `#DF9DFC` | — |
| Warm | Coral Flare `#FA746F` | Lantern Gold `#FCE79E` | Signal Yellow `#FFEE58` |
| Neutral text | Distant Haze `#6B7189` | Moonlight `#DCE8FF` | Snowglow `#F4F0FF` |

### Palette roles

- **Crown Violet:** classes, concrete types, and enums.
- **Orchid Haze:** interfaces.
- **Boreal Blue:** modules, namespaces, and import paths.
- **Glacier Blue:** bold function and method declarations; JavaScript block braces.
- **Ice Blue:** variables, parameters, operators, focus, links, and navigation.
- **Frost Blue:** language keywords and control flow.
- **Aurora Mint:** strings, template content, and string delimiters.
- **Pine Needle:** enum members and Elixir atoms.
- **Lantern Gold:** numeric, boolean, and other raw literal values.
- **Polar Pink:** tags, decorators, and special labels.
- **Coral Flare:** errors, invalid syntax, and destructive states only.

## Syntax hierarchy

| Reading role | Treatment | Examples |
|---|---|---|
| Durable structure | Bold, saturated violet/blue | class names, concrete types, modules |
| Declarations | Bold Glacier Blue | function or method declarations |
| Named values | Ice Blue | variables and parameters |
| Language glue | Frost Blue | `import`, `export`, `await`, `return`, `if` |
| Raw data | Mint, gold, pine | strings, literals, enum members, atoms |
| Secondary detail | Moonlight or Distant Haze | properties, punctuation, comments |

Function calls intentionally remain Moonlight. The declaration is a navigation
landmark; repeated calls should not compete with variables and values.

## Punctuation rules

- Grouping punctuation (`()`, `[]`, object/array braces, commas, dots) is Moonlight.
- Operators and language-significant pipes are Ice Blue.
- JavaScript function/control-flow body braces are Glacier Blue when identified by
  `punctuation.definition.block.js`.
- String quotes match Aurora Mint.
- Bracket-pair colorization should remain disabled while evaluating theme
  punctuation; it independently overrides bracket colors.

## Language notes

### JavaScript and TypeScript

- Frost Blue keywords; Boreal Blue modules, namespaces, and import paths.
- Bold Crown Violet classes, concrete types, and enums; Orchid Haze interfaces.
- Ice Blue variables and parameters; Moonlight properties.
- Glacier Blue bold declarations and Moonlight calls.
- Pine Needle enum members.

### JSON

JSON is data, not prose. Field names are regular-weight Moonlight, never bold.
Strings are Aurora Mint; numeric and boolean values are Lantern Gold; punctuation
remains Moonlight.

### Elixir

Elixir atoms and their leading colons use Pine Needle. The pipe operator is Ice Blue.
Inspect grammar scopes before styling module names, sigils, guards, or other special
forms.

### C

The intended C rule set is lexical:

- Built-in primitive types (`bool`, `int`, `char`, `float`, and similar) are bold
  Crown Violet.
- Preprocessor macro names are Pine Needle.
- C semantic highlighting must be disabled in user settings, because some language
  servers classify `bool` and user macros as the same `macro` token.

```jsonc
"[c]": {
  "editor.semanticHighlighting.enabled": false
}
```

## Accessibility and restraint

- Keep primary text at Moonlight or Snowglow against Night Canopy.
- Do not use mint, pine green, or pink as large background fills.
- Do not encode state only by color; preserve VS Code icons and decorations.
- Test strong foreground colors against every surface they can appear on.
- Prefer role reassignment over adding another shade when the theme feels crowded.

## Iteration workflow

1. Open a representative file in `samples/` in an Extension Development Host.
2. Change one role or one surface family at a time.
3. Use **Developer: Inspect Editor Tokens and Scopes** on the exact character that
   needs adjustment.
4. Add a narrow language rule only when generic scopes cannot express the intent.
5. Recheck the same role in at least one other language before promoting it to a
   global rule.

The current palette came from the prior local VS Code customization, a personal Oh
My Posh Aurora palette, and direct visual iteration against the VS Code Dark Modern
surface baseline.
