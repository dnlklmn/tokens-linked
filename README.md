[Deployed on Chromatic](https://master--628601d45b3cd6004a8acfc9.chromatic.com/?path=/story/example-button--primary)

### Setup
**On [ds-tokens](https://github.com/dnlklmn/ds-tokens):**
1. polkadot.json tokens exported from figma -> transformed by [token transformer](https://github.com/six7/figma-tokens/tree/main/token-transformer) to be usable by style dictionary, export light or dark mode like this: 
- `$ token-transformer polkadot.json polkadot-transformed.json global,space,typography,light  --expandTypography`
or
- `$ token-transformer polkadot.json polkadot-transformed.json global,space,typography,dark  --expandTypography`
2. `$ style-dictionary build` generates css (variables/variables.css)

**In this repo:**
1. use css variables from ds-tokens
2. (some) css variables implemented in button, card, and bg
3. npm start

### To do
- Import tokens json instead of copy-paste
- Figure out shadows, border radii, and token naming
- Automate transform & build
