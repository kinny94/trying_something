import { Directive, ElementRef } from "@angular/core";

import hljs from 'highlight.js/lib/highlight';
import java from 'highlight.js/lib/languages/java';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('java', java);

@Directive({
    selector: 'code[highlight]'
})
export class HighlightCodeDirective {
    constructor(private eltRef: ElementRef) {}

    ngAfterViewInit() {
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}