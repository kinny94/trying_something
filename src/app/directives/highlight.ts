import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import hljs from 'highlight.js';
import java from 'highlight.js/lib/languages/java';

@Directive({
  selector: 'code[highlight]',
})
export class HighlightCodeDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement);
    hljs.registerLanguage('java', java);
  }
}