import * as vscode from 'vscode';
import createFolderStructure from './commands/createFolderStructure';
import createTemplateFromFolder from './commands/createTemplateFromFolder';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let createStructure = vscode.commands.registerCommand(
    'FFS.createFolderStructure',
    createFolderStructure,
  );
  let createTemplate = vscode.commands.registerCommand(
    'FFS.createTemplateFromFolder',
    createTemplateFromFolder,
  );

  context.subscriptions.push(createStructure);
  context.subscriptions.push(createTemplate);
}

// this method is called when your extension is deactivated
export function deactivate() {}
