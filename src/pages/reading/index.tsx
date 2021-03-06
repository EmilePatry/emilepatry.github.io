import React, {useContext} from 'react';
import './index.scss';

import caret from '../../assets/icons/caret.svg';

import { ThemeSetStore, ThemeStore } from '../../App'

interface Book {
  title: string;
  author: string;
  link?: string;
}

interface Category {
  title: string;
  books: Book[];
}

const reading: Category[] =  require('../../assets/data/reading.json');

export default function Reading() {
  const theme = useContext(ThemeStore);

  return <div className="reading">
    {reading.map((category, i) => {
      if(category.books.length > 0){
        return <div key={i} className="category">
          <p className="category-title">{category.title}</p>
          {
            category.books.map((book, j) => {
              if(book.link){
                return (
                  <p key={j} className="book">
                    <img className={theme} src={caret} alt="caret"/>
                    <a className="highlight" target="blank" rel="noopener noreferrer" href={book.link}>
                      {book.title.replace(/ /g, '\u00a0')}
                    </a> - {book.author.replace(/ /g, '\u00a0')}
                  </p>
                )
              } else {
                return <p className="book" key={j}>{book.title} - {book.author}</p>
              }
            })
          }
        </div>
      } else {
        return ""
      }
    })}
    <a target="blank" rel="noopener noreferrer" className="highlight reading-list" href="https://www.goodreads.com/review/list/103954383-emile-r"><p>Reading List on Goodreads</p></a>
  </div>
}
