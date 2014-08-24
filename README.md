# TrelloReleaseNotes
====================

Chrome extension for printing release notes from [Trello.com](https://trello.com). This extension will create release notes from all cards from a specified list in Trello and categories the cards as lists based on label.

## How to Use the Extension

### Install the Extension

To install the extension clone this repository or download it as a zip-archive and load it as an unpacked extension in chrome. Follow the instruction on [this page](https://developer.chrome.com/extensions/getstarted) if you don't know how to load an unpacked extension.

### Use the Extension

Once loaded you will see a Trello-looking icon in the extensions bar. Follow these steps to generate the release notes:

1. Log in to Trello and navigate to the board where you have the list that you want to generate the release notes from.
2. While in the tab where you have your Trello board, click the extension popup-icon.
3. Make sure that the right list is selected in the popup window.
4. Click `Print List`.
5. A new tab will appear with the release notes.
6. Just copy paste the release notes in an e-mail or post them on a wiki or what ever.

### Recommendations for Conventions

The generated release notes are at the moment categorized under labels. If the labels don't have names the color will be used as group head line. If the card have no label attached to it, it will be displayed under a `No Label` category. On good convention would be to name the labels something relevant like e.g. `Story`, `Bug`, `Epic`, `Enhancement`, `Design` or `Documentation`. Whatever is relevant for your project. Then all cards titles will be categorized under a relevant label in the release notes.

## Todo

* Maybe add some settings to control categorization or display format?
* Maybe support other formats for the release notes, e.g. markdown, rst
* Package the extension and publish in Google Chrome Store
* Add comments in the release notes
