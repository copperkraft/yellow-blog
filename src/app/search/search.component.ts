import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {PostService} from '../services/post/post.service';
import {Post} from '../classes/post';
import {Tag} from '../classes/tag';
import {TagService} from '../services/tag/tag.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  tags: Tag[];
  posts: Post[];
  selectedTags: Tag[] = [];
  page: number;
  pageSize: number;

  loadTags() {
    this.tagService.getTags().then(tags => {
      this.tags = tags;
    });
  }

  loadPosts() {
    this.postService.getPosts(
      this.selectedTags,
      {
        page: 0,
        pageSize: 5
      })
      .then(data => {
      this.posts = data.posts;
    });
  }

  selectedTagsChange(tags: Tag[]) {
    this.selectedTags = tags;
    this.loadPosts();
  }

  constructor(
    private postService: PostService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.loadTags();
    this.loadPosts();
  }
}
