import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';

const notes = [
  {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Como es An Gular?',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Du bist Reactish',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '5 days',
  },
  {
    id: 4,
    title: 'Reactuj się kto moze!',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '10 days',
  },
];

const Notes = () => {
  return (
    <GridViewTemplate>
      {notes.map(({ title, content, created, id }) => (
        <Card cardType="notes" title={title} content={content} created={created} key={id} id={id} />
      ))}
    </GridViewTemplate>
  );
};

export default Notes;
