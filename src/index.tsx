import { NativeModules } from 'react-native';

export type PhotoEditControls = 'Shape' | 'Eraser' | 'Crop' | 'Filter' | 'Sticker' | 'Text' | 'Mosaic'
export type Options = {
  path: String;
  stickers: Array<String>;
  hideControls?: Array<PhotoEditControls>;
};

export type ErrorCode =
  | 'USER_CANCELLED'
  | 'IMAGE_LOAD_FAILED'
  | 'ACTIVITY_DOES_NOT_EXIST'
  | 'FAILED_TO_SAVE_IMAGE'
  | 'DONT_FIND_IMAGE'
  | 'ERROR_UNKNOWN';

type PhotoEditorType = {
  open(option: Options): Promise<String>;
};

const { PhotoEditor } = NativeModules;

export default PhotoEditor as PhotoEditorType;
