# Brownian Motion

Canvas art simulation Brownian Motion.

Demo Site: [https://brownian-motion.surge.sh](https://brownian-motion.surge.sh)

## How it works

A cursor is moving randomly in the canvas to simulate [brownian motion](https://en.wikipedia.org/wiki/Brownian_motion).

The color of the cursor varies randomly in the [oklab](https://github.com/beenotung/oklab.ts) color space.

## Get started

Project skeleton created by `npm init snowpack-canvas`.

Below are steps to get this project running locally:

1. `git clone https://github.com/beenotung/brownian-motion`
2. `cd brownian-motion`
3. `npm install`
4. `npm start`
5. Open [http://localhost:8100/](http://localhost:8100/) in your browser

Then you can make changes on the `tick()` function in [main.ts](./src/main.ts)

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
