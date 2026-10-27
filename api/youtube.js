export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({
      error: { message: "Method not allowed" },
    });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: { message: "YouTube API key is not configured" },
    });
  }

  const { resource, id, category = "0", videoId } = req.query;

  let endpoint;
  let params;

  if (resource === "videos") {
    endpoint = "videos";

    params = new URLSearchParams({
      part: "snippet,contentDetails,statistics",
    });

    if (typeof id === "string" && id) {
      params.set("id", id);
    } else {
      params.set("chart", "mostPopular");
      params.set("maxResults", "50");
      params.set("regionCode", "US");

      if (typeof category !== "string" || !/^\d+$/.test(category)) {
        return res.status(400).json({
          error: { message: "Invalid category" },
        });
      }

      params.set("videoCategoryId", category);
    }
  } else if (resource === "channels") {
    if (typeof id !== "string" || !id) {
      return res.status(400).json({
        error: { message: "A channel ID is required" },
      });
    }

    endpoint = "channels";

    params = new URLSearchParams({
      part: "snippet,statistics",
      id,
    });
  } else if (resource === "comments") {
    if (typeof videoId !== "string" || !videoId) {
      return res.status(400).json({
        error: { message: "A video ID is required" },
      });
    }

    endpoint = "commentThreads";

    params = new URLSearchParams({
      part: "snippet,replies",
      videoId,
      maxResults: "50",
      textFormat: "plainText",
    });
  } else {
    return res.status(400).json({
      error: { message: "Invalid resource" },
    });
  }

  params.set("key", apiKey);

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/${endpoint}?${params}`
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch {
    return res.status(502).json({
      error: { message: "Unable to contact YouTube" },
    });
  }
}