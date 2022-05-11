### Setup
1. polkadot.json tokens exported from figma -> transformed by this [token transformer](https://github.com/six7/figma-tokens/tree/main/token-transformer) to be usable by style dictionary
2. export light or dark mode here: `$ token-transformer polkadot.json polkadot-transformed.json global,space,typography,**light**  --expandTypography`
3. `$ style-dictionary build` generates css (variables/variables.css)
4. (some) css variables implemented in button, card, and bg
5. npm start

### To do
Import tokens json instead of copy-paste
Figure out shadows, border radii, and token naming
Automate transform & build
