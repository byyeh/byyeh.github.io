# Bowie Yeh, personal website

A static site: no build step, no dependencies. Open `index.html` in a browser to preview it.

## Publish on GitHub Pages

1. Sign in to GitHub as **byyeh** and create a new **public** repository named exactly `byyeh.github.io`. Leave "Add a README" unchecked.
2. On the new repository's page, click **uploading an existing file**. Unzip this package on your computer, select everything inside the folder (not the folder itself), and drag it onto the upload area. Make sure the `assets`, `css` and `js` folders come along.
3. Click **Commit changes**.
4. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and click Save.
5. Wait one to two minutes, then open https://byyeh.github.io

To update the site later, upload the changed files to the same repository the same way; GitHub replaces files with the same name.

## Where to edit

- `index.html`: all text. Each project is one `<article class="project">` block.
- `css/style.css`: colors and fonts are the variables at the top.
- `assets/img/`: images. Replace a file with the same name to swap an image.
- `assets/CV_Bowie_Yeh.pdf`: the file behind the "Download CV" buttons.
