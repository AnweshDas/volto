import { defineMessages } from 'react-intl';

import EditTitleTile from '@plone/volto/components/manage/Tiles/Title/Edit';
import EditDescriptionTile from '@plone/volto/components/manage/Tiles/Description/Edit';
import EditTextTile from '@plone/volto/components/manage/Tiles/Text/Edit';
import EditImageTile from '@plone/volto/components/manage/Tiles/Image/Edit';
import EditVideoTile from '@plone/volto/components/manage/Tiles/Video/Edit';
import EditMapTile from '@plone/volto/components/manage/Tiles/Maps/Edit';

const customTiles = [];

const messagesTiles = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'description',
    defaultMessage: 'Description',
  },
  text: {
    id: 'text',
    defaultMessage: 'Text',
  },
  image: {
    id: 'image',
    defaultMessage: 'Image',
  },
  video: {
    id: 'video',
    defaultMessage: 'Video',
  },
  maps: {
    id: 'maps',
    defaultMessage: 'Maps',
  },
});

const getDefaultEditTileView = type => {
  switch (type) {
    case 'title':
      return EditTitleTile;
    case 'description':
      return EditDescriptionTile;
    case 'text':
      return EditTextTile;
    case 'image':
      return EditImageTile;
    case 'video':
      return EditVideoTile;
    case 'maps':
      return EditMapTile;
    default:
      break;
  }
};

export { customTiles, getDefaultEditTileView, messagesTiles };
