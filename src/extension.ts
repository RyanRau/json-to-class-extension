import * as vscode from 'vscode';
import { window } from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		const editor = window.activeTextEditor;
		
		if (!editor) {
      return;
    }

    const raw = editor.document.getText();
		console.log(raw);

		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
