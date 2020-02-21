import React, {useState} from 'react';
import {findAll} from 'highlight-words-core';
import {
  SearchInputWrapper,
  InputSearch,
  InputResults,
  ResultItem,
  ResultLink,
  ResultTitle,
  ResultText
} from '../common/SearchInput';

export const DocsSearch = ({spec}) => {
  const [input, setInput] = useState('');

  const filtered = (spec?.endpoints ?? [])
    .map(x => {
      const nameChunks = findAll({
        caseSensitive: false,
        searchWords: input.split(' '),
        textToHighlight: x.title
      });
      const nameMatched = nameChunks.some(c => c.highlight);

      const descriptionChunks = findAll({
        caseSensitive: false,
        searchWords: input.split(' '),
        textToHighlight: x.description
      });
      const descriptionMatched = descriptionChunks.some(c => c.highlight);

      if (nameMatched || descriptionMatched) {
        return {
          link: `#${x.name}`,
          title: nameChunks.map(c => ({
            value: x.title.substring(c.start, c.end),
            highlight: c.highlight,
          })),
          description: descriptionChunks.map(c => ({
            value: x.description.substring(c.start, c.end),
            highlight: c.highlight,
          })),
        };
      }
    })
    .filter(x => !!x);

  return (
    <SearchInputWrapper>
      <InputSearch
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search for a keyword"
      />
      {input && (
        <InputResults>
          {filtered.map((x, i) => (
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
                <ResultText>
                  {x.description.map((c, i) => (
                    <span key={i} style={{backgroundColor: c.highlight ? '#5500FC' : 'transparent'}}>
                      {c.value}
                    </span>
                  ))}
                </ResultText>
              </ResultLink>
            </ResultItem>
          ))}
        </InputResults>
      )}
    </SearchInputWrapper>
  );
};
