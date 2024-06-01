# Welcome to the Next.js demo app published as an NPM package!

I needed a GUI app for my personal project that required access to the file system. Ideally, I should create a desktop app using a native platform or Electron for cross-platform support. However, developing a native app for macOS, Windows, and Linux would have taken time. The same applies to Electron, even though it's web-based.

So I had an idea. Since I am so used to making web apps using Next.js, why don't I make a Next.js app that anyone can run locally without cloning and installing dependencies? It's basically like an Electron app but without the hassle of [managing window lifecycle](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#managing-your-apps-window-lifecycle) or [learning the process model](https://www.electronjs.org/docs/latest/tutorial/process-model), etc.

**It turned out it's possible**. Using the template of this website, you can create the Next.js app normally and then build it for production. The production build will then be published as an NPM package. Then anyone can simply run `npx the-package-name`. For example, to run this repo's Next.js app, run

```
npx @nicnocquee/next-app-as-npm
```

# Writing and reading files

Writing and reading files from the file system is as easy as using the `fs` module as usual in the server part of Next.js, like in the `route.ts` or in a [server action](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).

For example, go to the [add user page](/add-user) and enter an email and password. Then click the "Add user" button. You will see the user added to the `public/data/users.json` file.
