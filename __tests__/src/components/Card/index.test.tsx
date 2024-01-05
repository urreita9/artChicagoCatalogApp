import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Card from '../../../../src/components/Card';
import {ArtWork} from '../../../../src/interfaces/interfaces.card';

const artWork: ArtWork = {
  altImage: 'artwork pic',
  description: 'Artist',
  id: 1,
  image: '',
  title: 'Artwork title',
  icon: true,
};

describe('Card component', () => {
  it('Should render title text when Card.Title is passed as children', () => {
    const {getByText} = render(
      <Card artWork={artWork}>
        <Card.Title titleTextStyle={{fontSize: 12}} />
      </Card>,
    );

    expect(getByText(artWork.title)).toBeOnTheScreen();
  });
  it('Should render description text when Card.Description is passed as children', () => {
    const {getByText} = render(
      <Card artWork={artWork}>
        <Card.Description descriptionTextStyle={{fontSize: 12}} />
      </Card>,
    );

    expect(getByText(artWork.description)).toBeOnTheScreen();
  });
  it('Card.Image should have a correct "alt" property', () => {
    const {getByTestId} = render(
      <Card artWork={artWork}>
        <Card.Image imageStyle={{borderRadius: 0, height: 50, width: 50}} />
      </Card>,
    );

    expect(getByTestId('Card.Image')).toHaveProp('alt', artWork.altImage);
  });
  it('Card.Image should have fallback image when image prop is an empty string', () => {
    const imgSrc = {testUri: '../../../src/assets/imagePlaceholder.png'};
    const {getByTestId} = render(
      <Card artWork={artWork}>
        <Card.Image
          imageStyle={{borderRadius: 0, height: 50, width: 50}}
          image=""
        />
      </Card>,
    );

    expect(getByTestId('Card.Image')).toHaveProp('source', imgSrc);
  });
  it('Card.Image should have the right image source when the ArtWork object provides it', () => {
    artWork.image = 'imageSrc';
    const imgSrc = {uri: artWork.image};
    const {getByTestId} = render(
      <Card artWork={artWork}>
        <Card.Image imageStyle={{borderRadius: 0, height: 50, width: 50}} />
      </Card>,
    );

    expect(getByTestId('Card.Image')).toHaveProp('source', imgSrc);
  });
  it('Card.Image should have the right image source when image prop is passed', () => {
    const imgSrc = 'imgSource';
    const {getByTestId} = render(
      <Card artWork={artWork}>
        <Card.Image
          imageStyle={{borderRadius: 0, height: 50, width: 50}}
          image={imgSrc}
        />
      </Card>,
    );

    expect(getByTestId('Card.Image')).toHaveProp('source', {uri: imgSrc});
  });
});
