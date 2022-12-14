import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'embed'
})
export class EmbedPipe implements PipeTransform {
  constructor( private domSanit: DomSanitizer) { }

  transform(value: string): unknown {

    let u = new URL(value)
    let p = new URLSearchParams(u.search)
    let url = "http://youtube.com/embed/";
    if(p.has("v")) {
      url += p.get("v")!
    }
    return this.domSanit.bypassSecurityTrustResourceUrl(url);
  }


}
