# Aurora notes

> A good theme makes the important shape of code visible before the detail.

- [x] Dark night-sky surfaces
- [ ] Check contrast on inactive UI
- [ ] Review syntax in every sample language

| Shade | Role | Hex |
| --- | --- | --- |
| Mint | Strings | `#CFFFE7` |
| Violet | Keywords | `#B99CFF` |
| Blue | Functions | `#84B5F2` |

Visit [VS Code theming docs](https://code.visualstudio.com/api/extension-guides/color-theme) and run `Developer: Inspect Editor Tokens and Scopes` for a selected token.

```elixir
Aurora.evoke(%{shade: :mint, visible?: true})
```
