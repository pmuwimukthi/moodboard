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
```bash
{
"moodboards": [
  {
    "name": "Your Board Name",
    "id": "unique_id",
    "groups": [
      {
        "id": "group_1",
        "videos": [
          {"id": "video_1", "file": "your_video.mp4"},
          {"id": "video_2", "file": "another_video.mp4"}
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
