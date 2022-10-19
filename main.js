const APIKEY = "AIzaSyB8SddGZE12s0Q7WhhdRaLf8Cqh1qUsI5I"
const VIDEO_ID = "2GyMx0Fjar0"
const getVideoData = async() => {
    const res1 = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&maxResults=3&id=${VIDEO_ID}&key=${APIKEY}`);
    const {items} = await res1.json();
    items.forEach(({statistics}) => {
        const 조회수 = statistics.viewCount;
        const 좋아요 = statistics.likeCount;
        const 댓글수 = statistics.commentCount;
        console.log(조회수,좋아요,댓글수)
      });
    }