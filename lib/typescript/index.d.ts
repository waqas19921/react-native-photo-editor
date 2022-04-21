export declare type PhotoEditControls = 'Shape' | 'Eraser' | 'Crop' | 'Filter' | 'Sticker' | 'Text' | 'Mosaic';
export declare type Options = {
    path: String;
    stickers: Array<String>;
    hideControls?: Array<PhotoEditControls>;
};
export declare type ErrorCode = 'USER_CANCELLED' | 'IMAGE_LOAD_FAILED' | 'ACTIVITY_DOES_NOT_EXIST' | 'FAILED_TO_SAVE_IMAGE' | 'DONT_FIND_IMAGE' | 'ERROR_UNKNOWN';
declare type PhotoEditorType = {
    open(option: Options): Promise<String>;
};
declare const _default: PhotoEditorType;
export default _default;
