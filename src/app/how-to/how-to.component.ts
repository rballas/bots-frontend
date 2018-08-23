import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css']
})
export class HowToComponent implements OnInit {
  toggleStep(num) {
    var howto = document.getElementById("howto");
    var lists = howto.getElementsByTagName("ul");
    for (var i = 0; i < lists.length; ++i) {
      var items = lists[i].getElementsByTagName("li");
      for (var j = 0; j < items.length; ++j) {
        items[j].classList.remove("is-active");
      }
    }
    let btn = document.getElementById("step_btn_" + num);
    btn.classList.add("is-active");

    var imgs = howto.getElementsByTagName("p");
    for (var i = 0; i < imgs.length; ++i) {
      if(!imgs[i].classList.contains("is-hidden")) {
        !imgs[i].classList.add("is-hidden");
      }
    }

    let img = document.getElementById("step_img_" + num);
    img.classList.remove("is-hidden");
  }

  constructor() { }

  ngOnInit() {
  }
}
