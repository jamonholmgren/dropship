# Dropship

Dropship is a CLI for setting up your web app to deploy to a [DigitalOcean Droplet](https://m.do.co/c/a78810eb0cff) vm, which famously starts at under $5/month.

Once you use Dropship to set up deployments, you can just push directly to it:

```
git push live
```

This will push your latest changes to your "live" server (or whatever you want to call it) and do all the build and deploy steps automatically.

## Getting Started

The easiest way to use Dropship is directly from your terminal -- no installation or dependencies needed.

_(Note: macOS and Linux only -- contributions welcome for Windows support!)_

```
alias dropship="source <(curl -sSL https://raw.githubusercontent.com/jamonholmgren/dropship/main/dropship)"
```

_Or if you aren't comfortable running it directly from the internet:_

<details>
<summary><strong>Manual setup</strong></summary>
Download it:

```
curl -sSL https://raw.githubusercontent.com/jamonholmgren/dropship/main/dropship > ./dropship
```

Open the `dropship` file in your editor and review it. If you're comfortable with what it's doing, alias it:

```
alias dropship="source $PWD/dropship"
```

</details>

_Note that the `dropship` alias will only be available during this terminal session -- if you want it to stick around longer, just add it to your `.zshrc` or similar._

Then run it from your project root:

```
dropship setup
```

Dropship will then start and walk you through setting up your project to deploy to a DigitalOcean Droplet.

## Troubleshooting/Help

Coming soon!

## Why DigitalOcean Droplets

Hosting your own website on a virtual machine might sound a bit daunting, but it's really not too hard -- especially with Dropship!

Many other hosts (Vercel, Fly.io, Render) have strict requirements around their free / indie tiers or require setting up Docker if you want to do anything custom. This also includes DigitalOcean's own App Platform. Running it on [DigitalOcean Droplets](https://m.do.co/c/a78810eb0cff) gives you more control.

And if your side project hits the top page of Hacker News, a Droplet is a fixed cost. It might go down temporarily, but you won't ever get a surprise bill for thousands of dollars!

## License

Copyright 2024 Jamon Holmgren. Licensed under a slightly modified FSL 1.1 + MIT Future license. See LICENSE.md.
