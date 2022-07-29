import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.scss']
})
export class TyperComponent implements OnInit {
  @Input() wordList: string[] = [];
  currentWord: string[] = [];
  currentIdx: number = 0;

  shuffleList(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  startTyping(): void {
    const wordToType = this.wordList[this.currentIdx];

    this.typeWord(wordToType.split(''));

    this.currentIdx++;
    if (this.currentIdx >= this.wordList.length) {
      this.currentIdx = 0;
      this.shuffleList(this.wordList);
    }
  }

  deleteWord(): void {
    if (this.currentWord.length > 0) {
      setTimeout(() => {
        this.currentWord.pop();
        this.deleteWord();
      }, 75);
    } else {
      setTimeout(() => {
        this.startTyping();
      }, 200);
    }
  }

  typeWord(wordToType: string[]): void {
    if (wordToType.length > 0) {
      setTimeout(() => {
        this.currentWord.push(wordToType.shift() || '');
        this.typeWord(wordToType);
      }, 125);
    } else {
      setTimeout(() => {
        this.deleteWord();
      }, 2500);
    }
  }

  ngOnInit(): void {
    this.shuffleList(this.wordList);
    this.startTyping();
  }

}
