import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tag} from '../../classes/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.less']
})
export class TagListComponent implements OnInit {
  @Input() tags: Tag[];
  @Input() selected: Tag[];
  @Output() selectedChange = new EventEmitter<Tag[]>();

  constructor() { }

  isSelected(tag: Tag) {
    return this.selected.some((item: Tag) => tag.id === item.id);
  }

  toggleSelection(target: Tag) {
    if (this.selected.some((tag: Tag) => tag.id === target.id)) {
      this.selected = this.selected.filter((tag: Tag) => tag.id !== target.id);
    } else {
      this.selected.push(target);
    }
    this.selectedChange.emit(this.selected);
  }

  ngOnInit() { }
}
