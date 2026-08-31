# Releasing a VSIX

Evoke Aurora is distributed directly as a VSIX. It does not require a Visual
Studio Marketplace publisher.

## Prerequisites

- Node.js 20 or later

## Build

From the repository root:

```sh
npx @vscode/vsce package
```

This produces `evoke-aurora-theme-<version>.vsix`. The file is ignored by Git.

## Verify

Install the built file in a regular VS Code window:

```sh
code --install-extension evoke-aurora-theme-<version>.vsix
```

Select **Evoke Aurora** from **Preferences: Color Theme**, then open the files in
`samples/` and confirm the expected UI and syntax behavior.

## Distribute

Create a GitHub Release for the matching Git tag and attach the generated VSIX.
Users can download that asset and install it with **Extensions: Install from
VSIX...**. Do not commit the generated VSIX to the repository.
