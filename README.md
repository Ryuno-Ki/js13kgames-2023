# js13kgames-2023

Topic is 13th Century. I've chosen the game title „The Baltic League”.
It's a play on The Hanseatic League which grew in that time period.
I'm focusing on the Baltic sea for now, however. The game has to fit within
13kb after all!

You can [play it online](https://2023.js13kgames.demo.jaenis.ch/)!

## Source code

Although the rules require me to host a copy of the code on GitHub the primary
code forge will be
[my self-hosted Forgejo](https://code.jaenis.ch/js13kgames/js13kgames-2023/).

## Documentation

I've added JSDoc comments to provide TypeScript definitions.
You can also study [my journal](./journal/) which I keep along the development
process.

## Build

The code uses the package manager yarn. Therefore run:

```sh
yarn run build
```

you can export the `NODE_ENV=development` environment variable to have a dev
build which is easier to debug.

## LICENSE

AGPL v3.0 or newer. See [LICENSE](./LICENSE.txt) for details.
