# chevrettelab.github.io
Chevrette Lab @ UF

This is the online home of the Chevrette Lab at the University of Florida. This site and repository is currently under construction.

# Setup

Some helpful resources for interacting with github pages and jekyll:

Main GH pages site: https://pages.github.com/

GH with jekyll main page: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

## Setting up jekyll:
- Set up Ruby:
	- If on windows
		- NOTE: jekyll will break with ruby versions 3.x and above on windows (not sure why). Use version 2.7.x. (issue here https://github.com/jekyll-one-org/j1-template/issues/1)
		- Install RubyInstaller https://rubyinstaller.org/downloads/
	- If on linux, set up ruby..
		- `sudo apt-get update -y && sudo apt-get upgrade -y`
		- `sudo apt-add-repository ppa:brightbox/ruby-ng`
		- `sudo apt-get update`
		- `sudo apt-get install ruby2.5 ruby2.5-dev build-essential dh-autoreconf`
		- `gem update`
- Install dependencies: `gem install jekyll bundler`
- Install yarn & nodejs
	- If on win
		- https://github.com/yarnpkg/yarn/releases/download/v1.22.4/yarn-1.22.4.msi
		- https://github.com/coreybutler/nvm/releases
		- https://nodejs.org/en/download/
	- If on linux
		- `brew install yarn`
		- `sudo apt-get install nodejs npm`
- add J1: `gem install j1-template`

- If on windows, fix eventmachine issues (see https://stackoverflow.com/questions/30682575/unable-to-load-the-eventmachine-c-extension-to-use-the-pure-ruby-reactor):
  - If exists, uninstall eventmachine: `gem uninstall eventmachine `
  - Edit gemfile: `gem install 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'`
- Set up new project: `j1 generate ./ --force`
- Setup site: `yarn setup`
  - Note: `yarn reset` will reset to factory if need be

# Edit, build, and test site locally

Build and locally host site: `yarn site` (off a fresh clone, run `yarn setup` first)

https://jekyll.one/pages/public/learn/kickstart/web_in_a_day/create_content/

## Important files to edit for content:
Almost everything worth editing lives in the `_data` dir. If you can't find what you're looking for below, odds are it's somewhere in `_data`.
- `_config.yml` for the main site components
- `pages/public/*/*.adoc` for static (non-news) pages
- `_data/modules/navigator_menu.yml` for nav bar menu
- `_data/modules/navigator.yml` for nav bar buttons and layout
- `_data/modules/defaults/navigator.yml` for nav bar buttons
  - Note: Icon gallery https://jekyll.one/pages/public/previewer/mdi_font/
  - Note: turning icons on/off in the nav bar requires proper mdi icon names (default j1 messed up github)
- `_data/blocks/banner.yml` for the banner content on the homepage
- `_data/blocks/panel.yml` for the middle content panels on the homepage (and elsewhere)
- `_data/blocks/footer.yml` for the bottom content panels on the homepage (and elsewhere)
- `collections/posts/public/*/*` for news (blog) items
- `pages/public/blog/navigator/index.html` (actually a yml/markdown) for blog landing page
- `index.html` for the home page

# How to deploy:

## First time:
- `yarn add gh-pages`
- add `"predeploy": "yarn run build",
    "deploy": "gh-pages -b master -d _site"`
	to the scripts block of package.json (on source branch)
- add `"homepage": "https://chevrettelab.github.io/",`
	to package.json (just above "dependencies")
	
## Deploy:
(off a fresh clone, run `yarn setup` first)
- from the source branch, run `yarn predeploy`
  - this will build the site
- push changes to the source branch (not sure if this is necessary before `yarn deploy`, but it works reliably)
- from the source branch, run `yarn deploy`
  - this will rebuild the site, push to the master branch (which only includes the static `_site` dir), and trigger a build/deploy on github pages  
