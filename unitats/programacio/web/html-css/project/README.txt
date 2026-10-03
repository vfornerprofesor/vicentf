FINAL PROJECT - MY PERSONAL WEBSITE
===================================

Name:    Laia Martí Ferrer
Group:   1st SMX
Date:    May 2026


WHAT MY SITE IS ABOUT
---------------------
It is my personal website and portfolio. It has four pages:

  - index.html     Home: who I am, a photo and a short introduction.
  - about.html     About: my studies (table), my skills, my interests
                   (list) and the websites I use to learn.
  - projects.html  Projects: six things I have built, in cards.
  - contact.html   Contact: a form and other ways to contact me.

Folder structure:

  laia-marti-project/
    index.html
    about.html
    projects.html
    contact.html
    README.txt
    css/styles.css
    images/ (8 images)


WHERE I GOT THE IMAGES
----------------------
All the images in the images folder are drawings made by me in SVG
format (with a text editor and Inkscape). They are not copied from
anywhere, so I do not need to ask for permission or give credit.

  profile.svg, desk.svg, pc-build.svg, home-network.svg,
  raspberry-pi.svg, network-cable.svg, website.svg, retro-game.svg

Font: Nunito, from Google Fonts (Open Font License).


WHAT WAS HARDEST
----------------
The hardest part was making the site look good on the mobile phone.
At first I wrote all the CSS for the computer and then, at 375px, the
table and the cards went out of the screen and there was horizontal
scroll. I started again "mobile first": the normal CSS is for the
phone, and with min-width media queries at 768px and 1200px I add the
columns. For the table I put it inside a div with overflow-x: auto, so
only the table scrolls and not the whole page. I also had problems with
the project images, because each one had a different height; I fixed it
with aspect-ratio and object-fit: cover.


CHECKLIST
---------
[x] 4 pages with complete skeleton and their own <title>
[x] header, nav, main, section, article and footer
[x] Same menu in the 4 pages, all links checked
[x] 8 images in images/, all with descriptive alt
[x] Table with th, scope and caption; ordered and unordered lists
[x] figure + figcaption
[x] Form with 8 fields, fieldset + legend, label for/id, required,
    minlength, pattern and types email, tel, date, select, textarea
[x] W3C validator: 0 errors in the 4 pages
[x] One CSS file, no style= and no <style>
[x] :root with variables (all the colours are variables)
[x] box-sizing: border-box
[x] Google Font
[x] Flexbox in the menu (justify-content, align-items, gap)
[x] Grid in the projects page, images with the same height
[x] :hover with transition (menu, buttons, cards, table rows)
[x] Viewport, mobile first, media queries at 768px and 1200px
[x] Tested at 375px, 768px and 1200px: no horizontal scroll


PRESENTATION NOTES (3 minutes)
------------------------------
1. Show the four pages on the computer and on the phone (DevTools).
2. Flexbox or grid?
   - Menu: flexbox, because it is a single line of links and I only
     need to align them and separate them with gap. On the phone the
     header changes to a column and the links wrap.
   - Project cards: grid, because they are rows AND columns and all
     the cards must have the same width: 1 column on the phone,
     2 columns on a tablet and 3 on the computer.
3. One thing I am proud of: the variables in :root. If I change
   --color-primary, the whole site changes colour in one second.
4. One thing I would improve: the form does not send anything yet.
   When we learn JavaScript and a server I want to make it work, and
   add a dark mode.
