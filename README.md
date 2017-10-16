# MASHA

An example of an adaptive cross-browser single-page application (SPA).

You can see the demo version of this project here https://shimanskayaelena.github.io/adaptive-layout-site/#/opportunities

Installation: you must run the following commands
- git init
- git clone https://github.com/ShimanskayaElena/adaptive-layout-site
- npm install
- bower install

The application must be run on localhost.

The purpose of creating this site was to demonstrate the possibility of sharing such popular frameworks as AngularJS and Bootstrap3 for the fastest and most convenient creation of single-page applications.

A sufficiently large number of interrupt points for media queries was chosen specially to show how flexible the design of the site can be adjusted to most of today's most popular devices.

In order for the site to look the same on both large screens and mobile phones, I retained the original look of the main menu, removing some menu items using special Bootstrap classes.

For the same reason, I did not use the drop-down menu for mobile phones to make index.html layout as simple, logical, and semantic as possible. If necessary, you can easily make the necessary changes to this code.

For the convenience of CSS editing, the LESS preprocessor was used, so now you can literally change the color design of the site and the fonts used in just one minute.

Bootstrap itself excludes components that are not involved in the layout in order to reduce the size of the final compiled css file.