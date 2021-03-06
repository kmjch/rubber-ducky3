'use babel';

import RubberDucky3 from '../lib/rubber-ducky3';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('RubberDucky3', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('rubber-ducky3');
  });

  describe('when rubber-ducky3:draw is triggered', () => {
    it('inserts some text', () => {
      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'rubber-ducky3:draw');

      runs(() => {
        let editor
        if (editor = atom.workspace.getActiveTextEditor()) {
          let curPos = editor.getCursorScreenPosition().toArray();
          expect(editor.lineTextForBufferRow(curPos[0])).toContain("draw");
        }
      });

    });
  });

  // describe('when the rubber-ducky3:respond event is triggered', () => {
  //   it('inserts some text', () => {
  //     // Before the activation event, there may not be any text
  //     expect(workspaceElement.querySelector('.rubber-ducky3')).not.toExist();
  //
  //     // This is an activation event, triggering it will cause the package to be
  //     // activated.
  //     atom.commands.dispatch(workspaceElement, 'rubber-ducky3:respond');
  //
  //     waitsForPromise(() => {
  //       return activationPromise;
  //     });
  //
  //     runs(() => {
  //       expect(workspaceElement.querySelector('.rubber-ducky3')).toExist();
  //
  //       let rubberDucky3Element = workspaceElement.querySelector('.rubber-ducky3');
  //       expect(rubberDucky3Element).toExist();
  //
  //       let rubberDucky3Panel = atom.workspace.panelForItem(rubberDucky3Element);
  //       expect(rubberDucky3Panel.isVisible()).toBe(true);
  //       atom.commands.dispatch(workspaceElement, 'rubber-ducky3:respond');
  //       expect(rubberDucky3Panel.isVisible()).toBe(false);
  //     });
  //   });
  //
  //   it('hides and shows the view', () => {
  //     // This test shows you an integration test testing at the view level.
  //
  //     // Attaching the workspaceElement to the DOM is required to allow the
  //     // `toBeVisible()` matchers to work. Anything testing visibility or focus
  //     // requires that the workspaceElement is on the DOM. Tests that attach the
  //     // workspaceElement to the DOM are generally slower than those off DOM.
  //     jasmine.attachToDOM(workspaceElement);
  //
  //     expect(workspaceElement.querySelector('.rubber-ducky3')).not.toExist();
  //
  //     // This is an activation event, triggering it causes the package to be
  //     // activated.
  //     atom.commands.dispatch(workspaceElement, 'rubber-ducky3:respond');
  //
  //     waitsForPromise(() => {
  //       return activationPromise;
  //     });
  //
  //     runs(() => {
  //       // Now we can test for view visibility
  //       let rubberDucky3Element = workspaceElement.querySelector('.rubber-ducky3');
  //       expect(rubberDucky3Element).toBeVisible();
  //       atom.commands.dispatch(workspaceElement, 'rubber-ducky3:respond');
  //       expect(rubberDucky3Element).not.toBeVisible();
  //     });
  //   });
  // });
});
