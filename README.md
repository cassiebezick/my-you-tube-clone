
YouTube Clone
A YouTube-inspired video browsing app built with React, Vite, and the YouTube Data API v3. Users can browse popular videos by category, watch embedded videos, and explore video details, channel information, and comments.

I built this project by following a GreatStack tutorial to practice connecting a React interface to live API data and building pages with reusable components.

Features
Browse popular videos in the United States.

Filter the feed by categories such as Gaming, Music, Sports, and Technology.

Expand or collapse the navigation sidebar.

Open individual video pages with embedded YouTube playback.

Display video titles, views, likes, publication dates, and description previews.

Display channel profile images, channel names, and subscriber counts.

Load up to 50 top-level comment threads with author information and like counts.

Browse additional popular videos from the selected video's category.

Adapt the layout for smaller screens with CSS media queries.

Built With
React — reusable components, state, and effects

Vite — development server and production builds

React Router — page navigation and URL parameters

YouTube Data API v3 — video, channel, and comment data

Moment.js — relative publication dates

CSS — layout, styling, and responsive adjustments

What I Learned
Breaking a familiar interface into smaller React components.

Using useState to store API responses and update the interface.

Using useEffect to request data when a page or selected category changes.

Reading video IDs from route parameters with useParams.

Using a video's channel ID to request additional channel information.

Working with nested JSON responses and rendering lists with .map().

Formatting large numbers into shorter values such as 1K and 1M.

Debugging request URLs, state setter names, and data that has not loaded yet.

Understanding API quotas and how they affect development.

Getting Started
Prerequisites
A version of Node.js supported by the project's Vite version, with npm installed.

A Google Cloud project with YouTube Data API v3 enabled and an API key.

1. Clone the repository
git clone https://github.com/cassiebezick/my-you-tube-clone.git
cd my-you-tube-clone
npm install
2. Configure your API key
The current project imports API_KEY from src/data.js. For your local setup, replace the existing API_KEY declaration in that file with:

export const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
Keep the existing value_converter function in the same file.

Create a .env.local file in the project root:

VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
Ensure .env.local is ignored by Git, then restart the development server after changing environment variables.

Vite exposes VITE_ variables to the browser, so this keeps the key out of source files but does not make it secret. Configure website referrer restrictions and restrict the key to the YouTube Data API in Google Cloud Console. Rotate any key previously committed to the repository.

3. Start the development server
npm run dev
Open the local URL printed in your terminal.

Available Scripts
Command	Purpose
npm run dev	Start the development server
npm run build	Generate a production build in dist
npm run preview	Preview the production build locally
npm run lint	Run ESLint checks
Project Structure
src/Components/Navbar/ — top navigation and sidebar toggle

src/Components/Sidebar/ — category navigation

src/Components/Feed/ — popular video cards

src/Components/PlayVideo/ — video player, details, channel information, and comments

src/Components/Recommended/ — additional popular videos in the same category

src/Pages/Home/ — home page layout

src/Pages/Video/ — individual video page layout

src/assets/ — local icons and images

src/data.js — API key export and number-formatting helper

src/App.jsx — application routes and sidebar state

Current Limitations
The search field is visual only; searching is not implemented.

Subscribe, like, dislike, share, save, upload, and account controls do not perform account actions.

The subscribed-channel list contains static sample content.

The recommended section uses popular videos in the same category rather than personalized recommendations.

Video descriptions are truncated, and comments are limited to the first requested page.

Some tutorial placeholder text remains in the video description area.

API error handling and loading states need improvement. Quota errors, disabled comments, or missing data may interrupt rendering.

Playback depends on each video's availability and embedding permissions.

Future Improvements
Add working video search.

Improve loading, empty, and error states.

Guard requests that depend on video data until that data is available.

Improve keyboard navigation, image descriptions, and accessible controls.

Add pagination or a load-more option.

Remove unused tutorial assets and resolve lint warnings.

Deployment Note
This app uses BrowserRouter. A production host needs to serve index.html for routes such as /video/:categoryId/:videoId so refreshing an individual video page works correctly.

Credits
Built following a GreatStack YouTube clone tutorial.
https://www.youtube.com/watch?v=gbAdFfSdtQ4

Video, channel, and comment data provided by YouTube through the YouTube Data API v3.

This is an educational portfolio project and is not affiliated with or endorsed by YouTube or Google. Video content, trademarks, and other third-party assets belong to their respective owners.

Author
Cassie Bezick · GitHub

