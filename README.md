# chevrettelab.github.io
Chevrette Lab @ UF

This is the online home of the Chevrette Lab at the University of Florida. This site and repository is currently under construction.

# Setup

Some helpful resources for interacting with github pages and jekyll:

Main GH pages site: https://pages.github.com/

GH with jekyll main page: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll

## Setting up jekyll:
Windows:
- Set up Ruby:
  - NOTE: jekyll will break with ruby versions 3.x and above on windows (not sure why). Use version 2.7.x. (issue here https://github.com/jekyll-one-org/j1-template/issues/1)
  - Install RubyInstaller https://rubyinstaller.org/downloads/
- Install dependencies: `gem install jekyll bundler`
- Install yarn & nodejs
  - https://github.com/yarnpkg/yarn/releases/download/v1.22.4/yarn-1.22.4.msi
  - https://github.com/coreybutler/nvm/releases
  - https://nodejs.org/en/download/
- add J1: `gem install j1-template`

Ubuntu quick setup:
NOTE: still in dev. does not quite work yet on chevrette-lab workstation under ubuntu 22.04 (all installs, but yarn breaks in subsequent steps)
- `sudo apt-get install build-essential dh-autoreconf ubuntu-dev-tools nodejs npm`
- `conda create -n myenv ruby gcc gxx_linux-64 yarn`
- `conda activate myenv`
- `gem update && gem install jekyll bundler && gem install j1-template`

Downgrade npm
`npm install -g npm@^8`

`bundle update && bundle install`
  - NOTE: conda sometimes screws up the ruby path so for the bundle commands to work, adding a sym link to ruby in the rubygems might be needed... `ln -s $(conda info --base)/envs/$CONDA_DEFAULT_ENV/bin/ruby $(conda info --base)/envs/$CONDA_DEFAULT_ENV/share/rubygems/bin/ruby`

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

Almost everything worth editing lives in the `_data` or `pages` dirs. If you can't find what you're looking for below, odds are it's somewhere in `_data`.

Note: `*.adoc` markup is a little strange, so see https://docs.asciidoctor.org/asciidoc/latest/ for a cheat sheet

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
