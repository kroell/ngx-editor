import { Node as ProseMirrorNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { CodeMirrorView } from 'prosemirror-codemirror-6';
import { basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';

const nodeViews = {
  code_mirror: (node: ProseMirrorNode, view: EditorView, getPos: () => number): CodeMirrorView => {
    return new CodeMirrorView({
      node,
      view,
      getPos,
      cmOptions: {
        extensions: [
          basicSetup,
          javascript(),
        ],
      },
    });
  },
};

export default nodeViews;
