export enum FetchState {
  DEFAULT,
  LOADING,
  SUCCESS,
  ERROR,
}

export type ErrorType = {
  message: string;
} | null;

export type LyricsType = string[];

export interface SongBasics {
  title: string;
  subtitle: string;
  image: string;
}

export interface Song extends SongBasics {
  id: string;
}

export interface SongDetails extends Song {
  lyrics: LyricsType;
}

export type RawSongs = {
  track: {
    key: string;
    title: string;
    subtitle: string;
    images: {
      background: string;
      coverart: string;
      coverarthq: string;
      joecolor: string;
    };
  };
};

export interface RawSongsResponse {
  tracks: {
    hits: RawSongs[];
  };
}

export interface RawSongDetails {
  key: string;
  title: string;
  subtitle: string;
  images: {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  };
  sections: [
    {
      type: string;
      text: string[];
    }
  ];
}
