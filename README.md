# Evoke Aurora

Evoke Aurora is a dark VS Code color theme: a dry graphite night sky with deliberate
ribbons of violet, blue, mint, pine green, and pink. The workbench stays calm so
syntax carries the aurora.

## Install

### From a release

1. Download the `.vsix` asset from this repository's GitHub Release.
2. In VS Code, run **Extensions: Install from VSIX...** and choose the downloaded
   file.
3. Run **Preferences: Color Theme** and select **Evoke Aurora**.

Or install from a terminal:

```sh
code --install-extension evoke-aurora-theme-<version>.vsix
```

### From source

```sh
git clone https://github.com/FormlessEvoker/vscode-theme-evoke-aurora.git
cd evoke-aurora-theme
npx @vscode/vsce package
```

Install the generated VSIX with the command above. Full release steps are in
`RELEASING.md`.

## Develop the theme

1. Open the repository in VS Code.
2. Press `F5` to launch an Extension Development Host.
3. Select **Evoke Aurora** in that window.
4. Edit `themes/Evoke Aurora-color-theme.json`.

Theme-file saves update the active development theme. Use **Developer: Inspect
Editor Tokens and Scopes** to identify a token before adding a language-specific
rule.

The `samples/` directory is a visual test suite for HTML, CSS,
JavaScript, TypeScript, JSON, Elixir, C, Go, Rust, Markdown, shell, and diff
syntax. It is intentionally excluded from the VSIX. Open `samples/palette.css` to
inspect the named palette with color decorators.

## Design

`themes/THEME.md` is the design source of truth. It documents the
surface hierarchy, named palette matrix, semantic hierarchy, language-specific
decisions, and iteration process.

### C behavior

For the intended C treatment—Crown Violet primitive types and Pine Needle
preprocessor macro names—disable semantic highlighting for C in your VS Code user
settings:

```jsonc
"[c]": {
  "editor.semanticHighlighting.enabled": false
}
```

This is necessary because some C language servers classify `bool` and named macros
as the same semantic token, even though they serve different reading roles.

## Distribution

Evoke Aurora is designed to be freely shared as a VSIX through GitHub Releases; no
Visual Studio Marketplace publisher is required. See `RELEASING.md` for the build,
verification, and distribution checklist.

## License

MIT — see `LICENSE`.
