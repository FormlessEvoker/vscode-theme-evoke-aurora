# Releasing a VSIX

Evoke Aurora is distributed directly as a VSIX. It does not require a Visual
Studio Marketplace publisher.

## Automated releases

Every pull request targeting `main` must have exactly one of these labels:

- `major`
- `minor`
- `patch`

The label-check workflow rejects missing or conflicting labels. When the PR merges,
the release workflow bumps `package.json`, commits the new version, creates a
matching `vX.Y.Z` tag, packages the VSIX, and attaches it to a GitHub Release.

Repository administrators must protect `main` and require the **Require release
label / require-release-label** status check. GitHub Actions must also be allowed to
create commits and tags with the repository `GITHUB_TOKEN`.

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
