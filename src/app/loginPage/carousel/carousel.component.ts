import {Component} from '@angular/core';
import {CarouselImage} from './carousel.interface';

@Component({
selector: 'carouselSelector',
templateUrl: './carouselTemplate.html',
// styleUrls: ['./carousel.component.css']
})

export class carouselComponent{
// name = "carouselComponent";
// imagesToBeDisplayed = new CarouselImage('');
public images : CarouselImage[] = [
    {"imageTitle":"Infosys", "url":"../../../../assets/images/Infy_1.jpg"},
    {"imageTitle":"Infosys", "url":"../../../../assets/images/Infy_2.jpg"},
    {"imageTitle":"Infosys", "url":"../../../../assets/images/Infy_3.jpg"}
    ]
    
}


