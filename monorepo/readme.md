# Monorepo

Links:
- https://www.toptal.com/front-end/guide-to-monorepos

#

## About

A **Monorepository** is an architectural concept, which basically contains all the meaning in its title. Instead of managing multiple repositories, you keep all your isolated code parts inside one repository. Keep in mind the word isolated—it means that monorepo has nothing in common with monolithic apps.

> a **monorepo** is a software development strategy where code for many projects are stored in the same repository
>
> -- <cite>Wikpedia</cite>

![from: toptal](https://uploads.toptal.io/blog/image/129133/toptal-blog-image-1550062710292-1db9f4f6ffc00e30acb3a43b3504c4a9.png)

This concept appeared about a decade ago, and Google was one of the first to use it. But, it is being popular nowdays because in the last 5-6 years, we are working with a lot of tools more at projects. 

> ES6, SCSS preprocessors, task managers, npm, etc.—nowadays, to maintain a small React-based app, you have to deal with project bundlers, test suites, CI/CD scripts, Docker configurations, and who knows what else

#### Monorepo Advantages:

- **One place to store all configs and tests**. Since everything is located inside one repo, you can configure your CI/CD and bundler once and then just re-use configs to build all packages before publishing them to remote. Same goes for unit, e2e, and integration tests—your CI will be able to launch all tests without having to deal with additional configuration.

- **Easily refactor global features with atomic commits.** Instead of doing a pull request for each repo, figuring out in which order to build your changes, you just need to make an atomic pull request which will contain all commits related to the feature that you are working against.

- **Simplified package publishing.** If you plan to implement a new feature inside a package that is dependent on another package with shared code, you can do it with a single command. It is a function that needs some additional configurations, which will be later discussed in a tooling review part of this article. Currently, there is a rich selection of tools, including Lerna, Yarn Workspaces, and Bazel.

- **Easier dependency management.** Only one package.json. No need to re-install dependencies in each repo whenever you want to update your dependencies.
Re-use code with shared packages while still keeping them isolated. Monorepo allows you to reuse your packages from other packages while keeping them isolated from one another. You can use a reference to the remote package and consume them via a single entry point. To use the local version, you are able to use local symlinks. This feature can be implemented via bash scripts or by introducing some additional tools like Lerna or Yarn.

#### Monorepo Disadvantages:

- **No way to restrict access only to some parts of the app.** Unfortunately, you can’t share only the part of your monorepo—you will have to give access to the whole codebase, which might lead to some security issues.

- **Poor Git performance when working on large-scale projects.** This issue starts to appear only on huge applications with more than a million commits and hundreds of devs doing their work simultaneously every day over the same repo. This becomes especially troublesome as Git uses a directed acyclic graph (DAG) to represent the history of a project. With a large number of commits, any command that walks the graph could become slow as the history deepens. Performance slows down as well because of the number of refs (i.e., branches or tags, solvable by removing refs you don’t need anymore) and amount of files tracked (as well as their weight, even though heavy files issue can be resolved using Git LFS).

*Note: Nowadays, Facebook tries to resolve issues with VCS scalability by patching Mercurial and, probably soon, this won’t be such a big issue.*

- **Higher build time.** Because you will have a lot of source code in one place, it will take way more time for your CI to run everything in order to approve every PR.

Most of the tools use a really similar approach, but there are some nuances.

## Tools
The set of tools for managing monorepos is constantly growing, and currently, it’s really easy to get lost in all of the variety of building systems for monorepos. You can always be aware of the popular solutions by using this repo. But for now, let’s get a quick look at the tools that are heavily used nowadays with JavaScript:

- **Bazel** is Google’s monorepo-oriented build system. More on Bazel: awesome-bazel

- **Yarn** is a JavaScript dependency management tool that supports monorepos through workspaces.

- **Lerna** is a tool for managing JavaScript projects with multiple packages, built on Yarn.

Most of the tools use a really similar approach, but there are some nuances.


![From Toptal: Illustration of the monorepo git repository's CI/CD process](https://uploads.toptal.io/blog/image/129134/toptal-blog-image-1550062803438-cc8a7bb8a669fb01e4167502ff908814.png)

## Lerna

