# MoodBoard App

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A video-focused mood board application with dark theme and responsive design. Organize video collections into groups and browse them through an intuitive interface.

## Features

- 📺 Video-focused mood boards
- 🖥 Fixed side panel navigation
- 📱 Mobile-responsive design
- 🎬 Auto-playing video previews
- 📄 Pagination support (40 videos/page)
- 🎨 Dark theme UI

## Installation

### Prerequisites
- Node.js v16+
- npm v8+

1. Clone the repository:
```bash
git clone https://github.com/pmuwimukthi/moodboard.git
```

3. Install dependencies:
```bash
cd mood-board-app
npm install
```
## Configuration

1. Add your video files to:
```bash
public/assets/videos/
```
2. Configure mood boards in `public/moodboards.json`:

replace with your video file names. if you don't want to group the video files. just create one group and put init
```bash

{
  "moodboards": [
    {
      "name": "mood board 1",
      "id": "mb1",
      "groups": [
        {
          "id": "g1",
          "videos": [
            {"id": "v1", "file": "a1.mp4"},
            {"id": "v2", "file": "a2.mp4"},
            {"id": "v3", "file": "a3.mp4"}
          ]
        },
        {
          "id": "g2",
          "videos": [
            {"id": "v18", "file": "a4.mp4"},
            {"id": "v19", "file": "a5.mp4"},
            {"id": "v20", "file": "a6.mp4"}
          ]
        }
      ]
    },
    {
      "name": "mood board 2",
      "id": "mb2",
      "groups": [
        {
          "id": "g1",
          "videos": [
            {"id": "v1", "file": "b1.mp4"},
            {"id": "v2", "file": "b2.mp4"},
            {"id": "v3", "file": "b3.mp4"},
            {"id": "v4", "file": "b4.mp4"}
          ]
        }
      ]
    }
  ]
}

```

## Running the Application
```bash
npm start
```


The app will open in your browser at:
`http://localhost:3000`

## Adding Content

1. **Add Videos**  
   Place MP4 files in `public/assets/videos/`

2. **Configure Boards**  
   Edit `public/moodboards.json` following this structure:
   - `moodboards`: Array of mood boards
   - `groups`: Video groups that stay together
   - `videos`: Array of video objects with unique IDs

> **Note:** The app will automatically ignore any missing video files

## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.
