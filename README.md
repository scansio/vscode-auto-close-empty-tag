# Auto Close Empty Tag

[![CI](https://github.com/scansio/vscode-auto-close-empty-tag/actions/workflows/main.yml/badge.svg)](https://github.com/scansio/vscode-auto-close-empty-tag/actions/workflows/main.yml)

Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text does.

## Book for VS Code

[《Visual Studio Code 权威指南》](https://union-click.jd.com/jdc?e=jdext-1261348777639735296-0&p=AyIGZRhbHQsWAVIaXxEyEgRdG1sRBxU3EUQDS10iXhBeGlcJDBkNXg9JHUlSSkkFSRwSBF0bWxEHFRgMXgdIMkRxFAUJD1RQZT0cBnwKDE4%2BaDpgB2ILWStbHAIQD1QaWxIBIgdUGlsRBxEEUxprJQIXNwd1g6O0yqLkB4%2B%2FjcePwitaJQIWD1cfWhwKGwVSG1wlAhoDZc31gdeauIyr%2FsOovNLYq46cqca50ytrJQEiXABPElAeEgRSG1kQCxQBUxxZHQQQA1YTXAkDIgdUGlscChECXRs1FGwSD1UbWRALFwRWK1slASJZOxoLRlUXU1NONU9QEkdXWRlJbBUDVB9TFgAVN1caWhcA)：带你深入浅出 VS Code！

![Book](images/book.jpg)

## Note

From VS Code 1.16, it has [built-in close tag support](https://code.visualstudio.com/updates/v1_16#_html-close-tags) for HTML, Handlebars and Razor files. This extension is enabled for other languages like XML, PHP, Vue, JavaScript, TypeScript, JSX, TSX, GJS, GTS, and so on. It is configurable.

## Features

* Automatically add closing tag when you type in the closing bracket of the opening tag
* After closing tag is inserted, the cursor is between the opening and closing tag
* Set the tag list that would not be auto closed
* Automatically close self-closing tag
* Support Auto Close Empty Tag as Sublime Text 3
* Use Keyboard Shortcut or Command Palette to add close tag manually

## Usages

After typing in the closing bracket of the opening tag, the closing tag will be inserted automatically.

![Usage](images/usage.gif)

To add close tag manually, use shortcut `Alt+c` (`Command+Alt+c` for Mac), or press `F1` and then select/type `Close Tag`

![Usage](images/close-tag.gif)

## Configuration


Add entry into `auto-close-empty-tag.activationOnLanguage` to set the languages that the extension will be activated. Use `["*"]` to activate for all languages. Below are the default settings:
```json
{
    "auto-close-empty-tag.activationOnLanguage": [
        "xml",
        "php",
        "blade",
        "ejs",
        "glimmer-js",
        "glimmer-ts",
        "jinja",
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "plaintext",
        "markdown",
        "vue",
        "liquid",
        "erb",
        "lang-cfml",
        "cfml",
        "HTML (Eex)"
    ]
}
```
**Note:** The setting should be set with language id defined in [VS Code](https://github.com/Microsoft/vscode/tree/master/extensions). Taking [javascript definition](https://github.com/Microsoft/vscode/blob/master/extensions/javascript/package.json) as an example, we need to use `javascript` for `.js` and `.es6`, use `javascriptreact` for `.jsx`. So, if you want to enable this extension on `.js` file, you need to add `javascript` in settings.json.

Alternatively you could also exlude the languages where you don't want the extension to be activated. Below is an example:
```json
{
    "auto-close-empty-tag.disableOnLanguage": [
        "php",
        "python"
    ]
}
```

Set the tag list that would be auto closed. Below are the default settings for empty elements in HTML per [W3C spec](https://www.w3.org/TR/html-markup/syntax.html#syntax-elements), and you could overwrite it:
```json
{
    "auto-close-empty-tag.includedTags": [
        "area",
        "base",
        "br",
        "col",
        "command",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ]
}
```

## Change Log
See Change Log [here](CHANGELOG.md)

## Issues
Submit the [issues](https://github.com/scansio/vscode-auto-close-empty-tag/issues) if you find any bug or have any suggestion.

## Contribution
Fork the [repo](https://github.com/scansio/vscode-auto-close-empty-tag) and submit pull requests.

## Blog
Visit the [blog](https://blogs.msdn.microsoft.com/scansio) or the [post](https://blogs.msdn.microsoft.com/scansio/2016/06/29/auto-close-empty-tag-for-visual-studio-code/) for more detailed info 