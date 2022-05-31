import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ngSlick';

  slides=[
    {img:"../../assets/tenoch.jpeg",
img1:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Ftenacookingoil%2F&psig=AOvVaw3TS9jPwRuk96VGd2aNjf52&ust=1654086399865000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOj7kZbeifgCFQAAAAAdAAAAABAD",
urlto:"",
subtxt:""},
    {img:"../../assets/yes.jpg",
    img1:"https://storage.sg.content-cdn.io/in-resources/fc93a3a8-f69b-444c-8b76-9848de9338d0/Images/userimages/mob-banner/pc/PC-Banner(main).jpg",
  urlto:"",
subtxt:""},
{img:"https://glenindia.com/blog/wp-content/uploads/2020/02/Ct-banner.jpg",
img1:"https://h4w3c8s4.rocketcdn.me/wp-content/uploads/2020/09/Sunflame-Hob-Glass-Top-4-Burner-Gas-Stove-Manual-Ignition-1024x530.jpg",
urlto:"",
subtxt:""},
{img:"https://www.ttkprestige.com/Media/Images/LandingPage/ClipOn/ClipOn-Banner-00.jpg",
img1:"https://www.zotezo.com/wp-content/uploads/2020/05/pressure-cooker-banner.jpg",
urlto:"",
subtxt:""},

  ]

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": true
  };
  constructor() { }

  ngOnInit(): void {
  }




  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

}
