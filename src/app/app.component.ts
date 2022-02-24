import { Component, TemplateRef, ViewChild, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



/*import {Title} from './title';
import {TitleService} from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [TitleService]
})
export class AppComponent implements OnInit {
 
    //типы шаблонов
    @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>|undefined;
    @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>|undefined;
        
    editedTitle: Title|null = null;
    titles: Array<Title>;
    isNewRecord: boolean = false;
    statusMessage: string = "";
        
    constructor(private serv: TitleService) {
        this.titles = new Array<Title>();
    }
        
    ngOnInit() {
        this.loadTitles();
    }
        
    //загрузка пользователей
    private loadTitles() {
        this.serv.getTitles().subscribe((data: Array<Title>) => {
                this.titles = data; 
            });
    }
    // добавление пользователя
    addTitle() {
        this.editedTitle = new Title("","",0);
        this.titles.push(this.editedTitle);
        this.isNewRecord = true;
    }
     
    // редактирование пользователя
    editTitle(title: Title) {
        this.editedTitle = new Title(title._id, title.title, title.text);
    }
    // загружаем один из двух шаблонов
    loadTemplate(title: Title) {
        if (this.editedTitle && this.editedTitle._id === title._id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }
    // сохраняем пользователя
    saveTitle() {
        if (this.isNewRecord) {
            // добавляем пользователя
            this.serv.createTitle(this.editedTitle as Title).subscribe(any => {
                this.statusMessage = 'Данные успешно добавлены',
                this.loadTitles();
            });
            this.isNewRecord = false;
            this.editedTitle = null;
        } else {
            // изменяем пользователя
            this.serv.updateTitle(this.editedTitle as Title).subscribe(any => {
                this.statusMessage = 'Данные успешно обновлены',
                this.loadTitles();
            });
            this.editedTitle = null;
        }
    }
}*/