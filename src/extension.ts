"use strict";
import * as vscode from "vscode";

const closeTags = (): void => {
  let editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  let config = vscode.workspace.getConfiguration(
    "auto-close-empty-tag",
    editor.document.uri
  );
  let includedTags = config.get<string[]>("includedTags", []);
  const selectionRange = getFullRange(editor);
  let text = editor.document.getText(selectionRange);
  if (text.length > 2) {
    let closedTag = getClosedTag(text, includedTags);
    if (closedTag) {
      editor.edit((editBuilder) => {
        editBuilder.replace(selectionRange, closedTag);
      });
    }
  }
};

const getClosedTag = (text: string, includedTags: string[]): string => {
  let tagRegex = new RegExp(
    `<\\s*(${includedTags.join("|")})(\\s+[^>]*)?\\/?>`,
    "g"
  );
  let commentRegex = /<!--[\s\S]*?-->/g;

  // Replace unclosed tags
  text = text.replace(tagRegex, (match) => {
    return match.endsWith("/>") ? match : match.slice(0, -1) + "/>";
  });

  // Replace HTML comments
  text = text.replace(commentRegex, (match) => {
    return "{/*" + match + "*/}";
  });

  return text;
};

const getFullRange = (editor: vscode.TextEditor): vscode.Range => {
  const document = editor.document;
  const firstLine = document.lineAt(0); // First line
  const lastLine = document.lineAt(document.lineCount - 1); // Last line

  return new vscode.Range(
    firstLine.range.start, // Start of first line (position 0, 0)
    lastLine.range.end // End of last line
  );
};

export function activate(context: vscode.ExtensionContext) {
  let closeTag = vscode.commands.registerCommand(
    "auto-close-empty-tag.closeTag",
    closeTags
  );

  context.subscriptions.push(closeTag);
}

// this method is called when your extension is deactivated
export function deactivate() {}
