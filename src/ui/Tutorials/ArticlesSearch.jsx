import React, {useState, useEffect} from 'react';
import {findAll} from 'highlight-words-core';
import {
  SearchInputWrapper,
  InputSearch,
  InputResults,
  ResultItem,
  ResultLink,
  ResultTitle
} from '../common/SearchInput';

export const ArticlesSearch = () => {
  const [input, setInput] = useState('');
  const [titles, setTitles] = useState(['']);

  useEffect(() => {
    const titles = Array.prototype.slice.call(document.querySelectorAll('.articles-title'));
    const filtered = titles.map(x => {
      const nameChunks = findAll({
        caseSensitive: false,
        searchWords: input.split(' '),
        textToHighlight: x.innerText
      });
      const nameMatched = nameChunks.some(c => c.highlight);

      if (nameMatched) {
        return {
          link: `#${x.innerText.split(' ').join('')}`,
          title: nameChunks.map(c => ({
            value: x.innerText.substring(c.start, c.end),
            highlight: c.highlight,
          })),
        };
      }
    }).filter(x => !!x);
    console.log(filtered);
    setTitles(filtered);

  }, [input]);

  return (
    <SearchInputWrapper>
      <InputSearch
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search for a keyword"
      />
      {input && (
        <InputResults>
          {titles.map((x, i) => (
            <ResultItem key={i}>
              <ResultLink
                href={x.link}
                onClick={() => setInput('')}
              >
                <ResultTitle>
                  {x.title.map((c, i) => (
                    <span key={i} style={{backgroundColor: c.highlight ? '#5500FC' : 'transparent'}}>
                      {c.value}
                    </span>
                  ))}
                </ResultTitle>
              </ResultLink>
            </ResultItem>
          ))}
        </InputResults>
      )}
    </SearchInputWrapper>
  );
};
