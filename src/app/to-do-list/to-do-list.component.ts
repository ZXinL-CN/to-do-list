import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit, AfterViewInit {
  public toDoList: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    $('#add-btn').on('click', () => {
      this.addItem();
    });
    $('#add-input').on('keydown', (e: any) => {
      if (e.keyCode === 13) {
        this.addItem();
      }
    });
  }

  public addItem() {
    const val = $('#add-input').val();
    if (!val) return false;
    this.toDoList.push(val);
    $('#add-input').val('');
  }
}
