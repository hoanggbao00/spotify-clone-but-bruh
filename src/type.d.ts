type UserProfile = {
  uri: string;
  name: string;
  image_url: string;
  followers_count: number;
  following_count: number;
  public_playlists: any[];
  total_public_playlists_count: number;
  is_verified: boolean;
  report_abuse_disabled: boolean;
  has_spotify_name: boolean;
  has_spotify_image: boolean;
  color: number;
};

type Image = {
  url: string;
  height: number;
  width: number;
};

type Track = {
  layout: string;
  type: string;
  key: string;
  title: string;
  genres: {
    primary: string;
  };
  subtitle: string;
  share: any;
  images: {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
  };
  artists: [
    {
      id: string;
      adamid: string;
    }
  ];
  url: string;
};

type DataTableColumn = {
  headerAccessKey: string;
  title: React.ReactNode | string;
  span?: number;
  text?: 'left' | 'right';
};
